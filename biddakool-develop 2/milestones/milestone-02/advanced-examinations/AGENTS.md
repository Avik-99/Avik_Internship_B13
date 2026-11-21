# AI/Developer Instructions — Advanced Grading, Analysis & Report Cards

You are implementing **Advanced Grading, Analysis & Report Cards** for Biddakool. Read `/AGENTS.md`, `/docs/01-SYSTEM-ARCHITECTURE.md` and this module’s ten documents before changing code.

- Scope: `Expand M1 examination engine for nuanced grade calculations and institution-specific outputs.`.
- Own only `src/Modules/AdvancedExaminations`, `apps/web/src/features/advanced-examinations`, `tests/AdvancedExaminations.Tests` and the module documentation unless an integration PR is approved.
- Do not create new tables/endpoints without updating `DATABASE-SCHEMA.md` / `API-CONTRACT.md`.
- Apply tenant isolation to every query, write, event, cache key, export and background job.
- Define aggregate-specific domain behavior; use CQRS handlers and typed DTOs; write tests before merging.
- Mock upstream modules from `DEPENDENCIES.md`; do not modify upstream data stores directly.
- Report any unclear brochure-specific academic rule as an open decision; never invent grading/financial regulations.
- Conclude tasks with changed file list, test results, API/DB changes and open risks.
