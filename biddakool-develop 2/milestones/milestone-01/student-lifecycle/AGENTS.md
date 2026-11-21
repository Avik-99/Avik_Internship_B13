# AI/Developer Instructions — Students, Guardians & Enrollment

You are implementing **Students, Guardians & Enrollment** for Biddakool. Read `/AGENTS.md`, `/docs/01-SYSTEM-ARCHITECTURE.md` and this module’s ten documents before changing code.

- Scope: `Canonical student identity, guardians, school class assignments and university course enrollments throughout academic life.`.
- Own only `src/Modules/StudentLifecycle`, `apps/web/src/features/student-lifecycle`, `tests/StudentLifecycle.Tests` and the module documentation unless an integration PR is approved.
- Do not create new tables/endpoints without updating `DATABASE-SCHEMA.md` / `API-CONTRACT.md`.
- Apply tenant isolation to every query, write, event, cache key, export and background job.
- Define aggregate-specific domain behavior; use CQRS handlers and typed DTOs; write tests before merging.
- Mock upstream modules from `DEPENDENCIES.md`; do not modify upstream data stores directly.
- Report any unclear brochure-specific academic rule as an open decision; never invent grading/financial regulations.
- Conclude tasks with changed file list, test results, API/DB changes and open risks.
