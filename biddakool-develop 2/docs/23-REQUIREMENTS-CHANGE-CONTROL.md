# Requirements Change Control and Traceability

## Requirement identifiers

`M<Milestone>-<MODULE_ID>-FR-###` identifies a feature, with matching `BR`, `API`, `T`, `TC`, `AC` IDs. Module folder names and APIs are stable contract review anchors.

## When a change arrives

1. Add product decision and source page/feedback reference.
2. Update `REQUIREMENTS.md` and `BUSINESS-RULES.md` in owning module.
3. Evaluate domain/DB, OpenAPI, event, UI and downstream impacts.
4. If the change breaks consumer contracts, create an ADR and versioned contract rollout plan.
5. Update implementation tasks, tests and acceptance criteria.
6. Obtain both owning module and integration reviewer approval.

## Source precedence

User-approved decisions > approved module SRS/ADR > module requirements draft > brochure examples > assumptions. Brochure is not a legal/academic policy authority and does not supersede institution regulations.
