# Testing & Quality Engineering Strategy

## Automated pipeline

1. Format + lint + static analysis (C# and TypeScript).
2. Build backend / Next.js with locked dependencies.
3. Domain unit tests and architecture layer boundary tests.
4. EF Core PostgreSQL integration tests with Testcontainers, isolated tenant fixture and migration validation.
5. Contract tests for OpenAPI and versioned events.
6. Playwright E2E with student/guardian/teacher/admin and two tenants.
7. Security scanning for dependencies/secrets; performance smoke tests.
8. Staging smoke, restore/backup and policy sign-off before release.

## Minimum mandatory scenarios

- Tenant A cannot access Tenant B's list, detail, export, message, PDF, file or cache entry.
- Guardian of child A cannot view child B; university privacy/consent rules are obeyed.
- Teacher cannot change another teacher's marks or attendance without explicit permission.
- Retry payment/webhook does not duplicate collection or ledger entry.
- Concurrent result publication preserves one coherent snapshot.
- Updating curriculum/grading policy does not rewrite archived result cards.

## Fixtures

Use synthetic example institutions representing school, university, medical and madrasa plus distinct users in each. Keep production PII out of test data and screenshots.

## Proposed backend test conventions

ADR-014 recommends NUnit, Shouldly assertions and Moq for external collaborators. The team can also use xUnit, but the instructor’s worked fixtures use NUnit. Following one convention reduces translation and review overhead. Confirm the choice in the decision register before pinning dependencies. Keep test data and mocks isolated per test. Avoid assertions that depend on fixture execution order.

| Test | Setup | Assertion |
| --- | --- | --- |
| Finalize a valid session | Construct a real open aggregate with a valid roster | Finalized state and one domain transition |
| Unauthorized handler call | Denied assignment and a recording persistence double | No mutation or outbox append |
| Two competing writes | Independent DI scopes and connections to the same Testcontainers PostgreSQL database | One commit and one conflict |
| Foreign tenant read | Same route, different tenant fixtures, real API host and database | No row, identifier or cached response disclosed |
| Existing web experience | Vitest for component/state behavior and Playwright for browser journeys | Demo results and production integration results recorded separately |

Name tests for operation, condition and expected outcome. Build the database from real module migrations. Use separate schemas/databases or a reliable reset between parallel fixtures. Capture status, persisted records and event counts after transaction tests. See the [worked acceptance cases](guides/ATTENDANCE-VERTICAL-SLICE.md).
