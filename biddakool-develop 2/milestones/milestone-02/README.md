# Milestone 2 — Advanced Automation

**Scope:** 13 bounded modules. The PDF is a feature reference; institution configuration and SaaS architecture are Biddakool design additions.

## Module delivery roster

| Module folder | Responsibility | PDF page(s) | Dependencies |
| --- | --- | --- | --- |
| online-admissions | Online Application & Admission | 12 | tenant-institution, academic-registry, student-lifecycle, fee-management, exam-operations |
| staff-recruitment | Faculty & Staff Recruitment | 13 | faculty-staff, fee-management, tenant-institution |
| leave-workflows | Leave Request & Approvals | 19, 53, 55 | student-lifecycle, faculty-staff, attendance |
| device-attendance | Biometric, RFID & Device Attendance | 15-18 | attendance, faculty-staff, student-lifecycle |
| advanced-examinations | Advanced Grading, Analysis & Report Cards | 22-27, 58-63 | assessment-results, academic-registry, attendance |
| exam-operations | Exam Admit Cards & Seat Plans | 28 | assessment-results, scheduling, student-lifecycle |
| online-fee-payments | Online Payments & Reconciliation | 35-36, 48 | fee-management, foundation-identity, tenant-institution |
| accounting-ledger | Accounting & General Ledger | 35, 37-39 | tenant-institution, fee-management |
| staff-payroll | Payroll, Deductions & Provident Fund | 15, 43, 53 | faculty-staff, attendance, leave-workflows, accounting-ledger |
| messaging-sms | In-App Messaging, SMS & Notifications | 10, 15, 35, 44 | foundation-identity, student-lifecycle, faculty-staff, attendance, fee-management, assessment-results, notices-events |
| lesson-plans | Lesson Plans, Diaries & Student Progress | 31, 50, 53 | academic-registry, scheduling, student-lifecycle, faculty-staff |
| certificates | Certificates & Enhanced ID Card Designer | 19-20 | student-lifecycle, faculty-staff, tenant-institution |
| feedback-committees | Feedback & Basic Committee Administration | 46 | foundation-identity, tenant-institution, student-lifecycle |

## Milestone exit criteria

- [ ] Applicants can apply online and staff can recruit online.
- [ ] Payment gateway captures are reconciled safely and accounting receives correct postings.
- [ ] Advanced grades, exam logistics and employee payroll work under approved institution policies.
- [ ] Messaging and teaching progress are integrated with core identities and enrollments.

## Delivery protocol

1. Merge shared contracts and approved DB/architecture ADRs first.
2. Develop modules concurrently using mocked upstream interfaces.
3. Integrate via published commands and versioned events, never shared EF contexts.
4. Run full tenant-isolation, permission, CI, migration, security and E2E release gates.
5. Demo end-to-end journeys and capture evidence in `docs/18-INTEGRATION-TEST-MATRIX.md`.
