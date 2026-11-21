# Definition of Ready & Done

## Definition of ready (per module)

- [ ] Module owner named; upstream dependency contract reviewed.
- [ ] Requirement IDs accepted; business rules/unknowns logged.
- [ ] Security/tenant and privacy review complete.
- [ ] Candidate entity and API contract approved before migration/consumer coding.
- [ ] Agent/developer tasks partitioned without conflicting file ownership.

## Definition of done (per feature)

- [ ] Backend domain validation/CQRS/transaction and API implemented.
- [ ] Next.js UI implemented with typed client and accessible states.
- [ ] Unit, integration, tenant isolation, negative path and relevant E2E tests pass.
- [ ] Logging/audit, permissions, security and performance checked.
- [ ] Documentation, migrations, events and OpenAPI updated, signed off by relevant owners.

## Definition of done (per milestone)

- [ ] All milestone modules pass module acceptance checklists.
- [ ] End-to-end journeys and two-tenant abuse tests pass in staging.
- [ ] Backup/restore, deploy, rollback/forward-fix, alerts and incident runbook validated.
- [ ] Product demo proves actual institution operation, not just screenshot matching.
- [ ] Outstanding institutional rules either approved or explicitly removed from release scope.
