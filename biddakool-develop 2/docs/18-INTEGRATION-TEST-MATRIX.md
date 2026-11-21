# System Integration Test & Demonstration Matrix

Each journey requires success, validation, unauthorized, cross-tenant and important retry scenarios. Mark complete only with passing CI/E2E evidence.

| ID | End-to-end journey | Modules | Milestone |
| --- | --- | --- | --- |
| J01 | Create tenant and institution; invite admin; admin sees only own tenant | Identity, Tenant | M1 |
| J02 | Configure academic program, session, offering, class placement and course registration | Academic Registry, Students, Staff | M1 |
| J03 | Teacher records class attendance and guardian sees linked student only | Attendance, Students, Portals | M1 |
| J04 | Exam marks approved and published; students see immutable report card | Assessment, Academic Registry, Portals | M1 |
| J05 | Cash collection and fee receipt with partial dues and duplicate retry | Fees, Portals | M1 |
| J06 | Public application -> admission decision -> admitted student enrollment | Admissions, Students, Fees | M2 |
| J07 | Payment gateway webhook duplicate -> single fee receipt and ledger posting | OnlinePayments, Fees, Accounting | M2 |
| J08 | Staff attendance -> leave approval -> payroll policy deduction -> payslip | Attendance, Leave, Payroll | M2 |
| J09 | Exam seat plan and custom report card result generation | ExamOps, AdvancedExam, Assessment | M2 |
| J10 | Teacher sends authorized guardian message; due/attendance SMS template generated | Messaging, Students, Fees, Attendance | M2 |
| J11 | Hostel room assigned -> monthly dues generated -> payment collection | Hostel, Fees | M3 |
| J12 | Book checkout and return; duplicate-loan concurrency rejection | Library, Students | M3 |
| J13 | Medical lecture/ward attendance + item/card/term marks -> eligibility explanation | Medical, Attendance, Results | M3 |
| J14 | Hifz group progress -> special exam -> merit and report | Hifz, Students, Results | M3 |
| J15 | Subscription entitlement blocks optional module but not base academic data | SaaS, Identity, Tenant | M3 |

## Mandatory environment matrix

- Institution A: secondary school, class/section enrollment.
- Institution B: university, term/course enrollment.
- Institution C: medical college, clinical sessions and medical exam policies.
- Institution D: madrasa with Hifz optional module.
- Cross-tenant request attempts and teacher/guardian role edge cases for every journey.

## Data fixtures and assertions

Use synthetic students, guardians, staff, currencies and records; include simultaneous class and course enrollments, transfer, term rollover, grading policy revisions, partial payments and document downloads.
