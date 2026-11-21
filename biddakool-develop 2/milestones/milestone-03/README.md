# Milestone 3 — Specialized & Enterprise Extensions

**Scope:** 10 bounded modules. The PDF is a feature reference; institution configuration and SaaS architecture are Biddakool design additions.

## Module delivery roster

| Module folder | Responsibility | PDF page(s) | Dependencies |
| --- | --- | --- | --- |
| inventory | Inventory & Warehouse Operations | 10, 41 | tenant-institution, student-lifecycle, faculty-staff, accounting-ledger |
| library | Library & Lending | 10, 42 | student-lifecycle, faculty-staff, fee-management |
| hostel | Hostel, Housing & Residence Fees | 10, 42 | student-lifecycle, fee-management, tenant-institution |
| donations | Donations & Donor Pledges | 10, 43 | accounting-ledger, messaging-sms, tenant-institution |
| hifz | Hifz Department & Assessment | 10, 45 | student-lifecycle, faculty-staff, assessment-results |
| learning-management | Online Courses, Assignments & Quizzes | 32-33, 50 | academic-registry, student-lifecycle, faculty-staff, assessment-results |
| medical-education | Medical College Academic Operations | 54-57 | academic-registry, student-lifecycle, attendance, assessment-results, leave-workflows, messaging-sms, faculty-staff |
| institutional-governance | Governance, Committees & Audit | 9, 46 | foundation-identity, feedback-committees, tenant-institution |
| analytics-insights | Advanced Academic & Operational Analytics | 15-18, 24-27, 31, 35-39, 55-57 | attendance, assessment-results, fee-management, student-lifecycle, faculty-staff, accounting-ledger |
| saas-enterprise | SaaS Commercial Operations & Enterprise Extensions | 9, 20, 46 | foundation-identity, tenant-institution, accounting-ledger, analytics-insights |

## Milestone exit criteria

- [ ] Module entitlements enable optional services without affecting core school operations.
- [ ] Inventory, library, hostel, donation, Hifz and LMS modules are fully isolated yet integrated via contracts.
- [ ] Medical attendance, item/card/term results and prof exam eligibility have institution-approved rules.
- [ ] SaaS commercial and enterprise tools do not compromise base tenant isolation.

## Delivery protocol

1. Merge shared contracts and approved DB/architecture ADRs first.
2. Develop modules concurrently using mocked upstream interfaces.
3. Integrate via published commands and versioned events, never shared EF contexts.
4. Run full tenant-isolation, permission, CI, migration, security and E2E release gates.
5. Demo end-to-end journeys and capture evidence in `docs/18-INTEGRATION-TEST-MATRIX.md`.
