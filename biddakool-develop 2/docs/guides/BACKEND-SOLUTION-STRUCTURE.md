# Building the first backend module

Use this layout when scaffolding the backend under the existing repository root. The checked-in application is apps/web. Its Bun lockfile, Next.js routes, Vitest tests and Playwright journeys belong to the web team. Production identity, the .NET host, PostgreSQL migrations and generated clients are implementation work.

## Proposed project map

Paths below are targets. Start with the host and the module in the assigned task. Attendance illustrates the pattern used for later modules.

| Target | Project references and responsibility |
| --- | --- |
| apps/api/Biddakool.Api/Biddakool.Api.csproj | Composition root. References module Api and Infrastructure for registration, configures authentication, authorization, Problem Details and OpenAPI. |
| src/Modules/Attendance/Domain/Biddakool.Attendance.Domain.csproj | AttendanceSession, record state and finalization rules. Plain C# with domain primitives only. |
| src/Modules/Attendance/Application/Biddakool.Attendance.Application.csproj | References Domain. Owns Commands/FinalizeAttendance, Queries/GetStudentSummary, persistence ports and response DTOs. |
| src/Modules/Attendance/Infrastructure/Biddakool.Attendance.Infrastructure.csproj | References Application and Domain. Owns AttendanceDbContext, EF configurations, Migrations, repository implementations, outbox and delivery adapters. |
| src/Modules/Attendance/Api/Biddakool.Attendance.Api.csproj | References Application. Owns route mapping, HTTP validation and contract translation. Endpoint style remains an open choice in the register. |
| tests/Attendance.Tests, tests/Integration.Tests, tests/Architecture.Tests | Domain and handler examples, PostgreSQL/HTTP tests and project reference checks respectively. |

Keep shared primitives small. A shared result type or clock is appropriate in BuildingBlocks. A student record belongs to Student Lifecycle. Obtain external module data through published contracts or a local projection. Enforce direction in the architecture suite by inspecting references, including transitive access in source where applicable.

## Composition and lifetime

The host calls a module registrar at startup. Inside that registrar, wire the module DbContext with Npgsql, repository interfaces, the unit of work and application handlers. An HTTP request resolves its write repository and unit of work against the same scoped DbContext. A repository stages changes. The handler controls the commit. A query returns a projected DTO and requires no write repository.

A hosted outbox dispatcher creates a scope per unit of work. It claims eligible work with a bounded lease, validates the event's tenant metadata, initializes the scope and resolves its scoped dependencies there. Failure releases the claim or lets the lease expire. Disposal clears the scope before the next tenant. Use the module's own schema and migration history according to the reviewed database design. A migration review must establish schema ownership and rehearsal evidence before deployment.

## First backend PR

1. Inspect the tree and developer assignment. Record the projects, owner and ADRs needed for the scoped task.
2. Build the host and approved module projects under the existing root. Register the module and expose a health endpoint without tenant data. Keep the implementation independent of pending feature policy.
3. Build and test from the solution entry point. Add a reference-direction check and a composition smoke test that resolves the module in a scope. Validate migration ownership against an isolated PostgreSQL database when persistence is included.
4. Include commands, outcomes and contract changes in the PR. Link follow-up work for authentication or policies awaiting a decision.

See [attendance workflow](ATTENDANCE-VERTICAL-SLICE.md) and the [decision register](../12-DECISIONS-REGISTER.md).

## Wiring a module in C#

The following excerpts are implementation examples. The type names identify responsibilities to implement in the new backend. In the Attendance Infrastructure project, declare the modules it can use directly:

```xml
<ItemGroup>
  <ProjectReference Include="../Application/Biddakool.Attendance.Application.csproj" />
  <ProjectReference Include="../Domain/Biddakool.Attendance.Domain.csproj" />
</ItemGroup>
```

The host's Program.cs calls the Infrastructure extension below. The Attendance API assembly owns route registration. Register common request context, authorization and error translation once at the host.

```csharp
// Program.cs, during service registration
builder.Services.AddAttendanceModule(builder.Configuration);

// Attendance/Infrastructure/AttendanceRegistration.cs
public static class AttendanceRegistration
{
    public static IServiceCollection AddAttendanceModule(
        this IServiceCollection services, IConfiguration configuration)
    {
        var connection = configuration.GetConnectionString("Biddakool")
            ?? throw new InvalidOperationException("Missing Biddakool connection string.");

        services.AddDbContext<AttendanceDbContext>(options =>
            options.UseNpgsql(connection, pg =>
                pg.MigrationsHistoryTable("__ef_migrations_history", "attendance")));
        services.AddScoped<IAttendanceUnitOfWork>(sp =>
            sp.GetRequiredService<AttendanceDbContext>());
        services.AddScoped<IAttendanceSessions, AttendanceSessions>();
        services.AddScoped<FinalizeAttendanceHandler>();
        return services;
    }
}
```

Here AttendanceDbContext implements IAttendanceUnitOfWork. AttendanceSessions receives AttendanceDbContext in its constructor. Register the replay store, audit writer and outbox writer against this same scoped context when implementing the [finalization handler](ATTENDANCE-VERTICAL-SLICE.md). Verify with an integration test that throwing after staging the audit rolls back every write.

A singleton worker can receive IServiceScopeFactory. For each trusted claimed work item, use a fresh scope before resolving tenant-aware services:

```csharp
await using var scope = scopeFactory.CreateAsyncScope();
var services = scope.ServiceProvider;
services.GetRequiredService<IJobTenantContext>().Initialize(claim.TenantId);
var dispatcher = services.GetRequiredService<IAttendanceOutboxDispatcher>();
await dispatcher.DeliverClaimAsync(claim, cancellationToken);
```

The worker validates the claim from its persistent queue. Record delivery success only after acknowledgement. The consumer's inbox handles a crash between acknowledgement and updating the producer's delivery record.

For the browser and API membership lifecycle, see the [identity and session flow](IDENTITY-AND-SESSION-FLOW.md).
