# Feature Inventory — All Milestones

This document lists every feature defined in the repository: **232 features across 34 modules**, grouped by milestone and module. It is a reference for knowing what each module does. It does not track specification or implementation progress.

Feature names and IDs are copied verbatim from each module's `REQUIREMENTS.md`. To add, remove or reword a feature, change the module's `REQUIREMENTS.md` first, following [requirements change control](23-REQUIREMENTS-CHANGE-CONTROL.md), and then update this list.

## How to read this inventory

| Column | Meaning |
| --- | --- |
| ID | Requirement ID `M<milestone>-<MODULE>-FR-###` from the module's `REQUIREMENTS.md` |
| Feature | Requirement text as written in the module |
| Priority | P1 = Milestone 1, P2 = Milestone 2, P3 = Milestone 3 |

PDF pages use the physical page numbering of `EximusEdu_Brochure_v3.pdf` (64 pages), as in [PDF feature traceability](14-PDF-FEATURE-TRACEABILITY.md).

## Summary

| Milestone | Modules | Features |
| --- | --- | --- |
| M1 — Mandatory, Deployable Core | 11 | 78 |
| M2 — Advanced Automation | 13 | 88 |
| M3 — Specialized & Enterprise Extensions | 10 | 66 |
| **Total** | **34** | **232** |

### Modules at a glance

| Milestone | Module | Title | Features | PDF pages |
| --- | --- | --- | --- | --- |
| M1 | [foundation-identity](#foundation-identity) | Identity & Access Control | 6 | 9-10, 46 |
| M1 | [tenant-institution](#tenant-institution) | Tenant & Institution Configuration | 6 | 9-10, 20, 46 |
| M1 | [academic-registry](#academic-registry) | Academic Registry & Curriculum | 7 | 9-10, 21, 29-30 |
| M1 | [student-lifecycle](#student-lifecycle) | Students, Guardians & Enrollment | 8 | 12, 14, 19-20, 48-50 |
| M1 | [faculty-staff](#faculty-staff) | Faculty, Teacher & Staff Directory | 6 | 13-15, 18, 52-53 |
| M1 | [scheduling](#scheduling) | Class, Teacher & Examination Timetables | 7 | 28-30 |
| M1 | [attendance](#attendance) | Student & Staff Attendance | 8 | 15-18, 49, 52, 55 |
| M1 | [assessment-results](#assessment-results) | Examinations, Grades & Results | 9 | 21-27, 49, 53, 55-57 |
| M1 | [fee-management](#fee-management) | Student Fees, Dues & Cash Collection | 8 | 10, 35-36, 48 |
| M1 | [notices-events](#notices-events) | Notices, Events & Calendar | 6 | 9-10, 46, 48-50 |
| M1 | [self-service-portals](#self-service-portals) | Student, Guardian, Teacher & Admin Portals | 7 | 14-18, 48-53 |
| M2 | [online-admissions](#online-admissions) | Online Application & Admission | 7 | 12 |
| M2 | [staff-recruitment](#staff-recruitment) | Faculty & Staff Recruitment | 6 | 13 |
| M2 | [leave-workflows](#leave-workflows) | Leave Request & Approvals | 6 | 19, 53, 55 |
| M2 | [device-attendance](#device-attendance) | Biometric, RFID & Device Attendance | 7 | 15-18 |
| M2 | [advanced-examinations](#advanced-examinations) | Advanced Grading, Analysis & Report Cards | 9 | 22-27, 58-63 |
| M2 | [exam-operations](#exam-operations) | Exam Admit Cards & Seat Plans | 6 | 28 |
| M2 | [online-fee-payments](#online-fee-payments) | Online Payments & Reconciliation | 7 | 35-36, 48 |
| M2 | [accounting-ledger](#accounting-ledger) | Accounting & General Ledger | 7 | 35, 37-39 |
| M2 | [staff-payroll](#staff-payroll) | Payroll, Deductions & Provident Fund | 7 | 15, 43, 53 |
| M2 | [messaging-sms](#messaging-sms) | In-App Messaging, SMS & Notifications | 8 | 10, 15, 35, 44 |
| M2 | [lesson-plans](#lesson-plans) | Lesson Plans, Diaries & Student Progress | 6 | 31, 50, 53 |
| M2 | [certificates](#certificates) | Certificates & Enhanced ID Card Designer | 6 | 19-20 |
| M2 | [feedback-committees](#feedback-committees) | Feedback & Basic Committee Administration | 6 | 46 |
| M3 | [inventory](#inventory) | Inventory & Warehouse Operations | 6 | 10, 41 |
| M3 | [library](#library) | Library & Lending | 6 | 10, 42 |
| M3 | [hostel](#hostel) | Hostel, Housing & Residence Fees | 6 | 10, 42 |
| M3 | [donations](#donations) | Donations & Donor Pledges | 6 | 10, 43 |
| M3 | [hifz](#hifz) | Hifz Department & Assessment | 6 | 10, 45 |
| M3 | [learning-management](#learning-management) | Online Courses, Assignments & Quizzes | 7 | 32-33, 50 |
| M3 | [medical-education](#medical-education) | Medical College Academic Operations | 8 | 54-57 |
| M3 | [institutional-governance](#institutional-governance) | Governance, Committees & Audit | 6 | 9, 46 |
| M3 | [analytics-insights](#analytics-insights) | Advanced Academic & Operational Analytics | 7 | 15-18, 24-27, 31, 35-39, 55-57 |
| M3 | [saas-enterprise](#saas-enterprise) | SaaS Commercial Operations & Enterprise Extensions | 8 | 9, 20, 46 |

## Milestone 1 — Mandatory, Deployable Core (11 modules, 78 features)

### foundation-identity

**Identity & Access Control**  |  [Module folder](../milestones/milestone-01/foundation-identity/README.md)  |  PDF pages 9-10, 46  |  Depends on: none

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-FOUNDATION_IDENTITY-FR-001 | Tenant-scoped login, logout, invitation and password recovery | P1 |
| 2 | M1-FOUNDATION_IDENTITY-FR-002 | Separate platform-level and institution-level access; membership selection for a multi-institution user | P1 |
| 3 | M1-FOUNDATION_IDENTITY-FR-003 | Institution-configurable roles with explicit permissions for each action | P1 |
| 4 | M1-FOUNDATION_IDENTITY-FR-004 | Faculty, accountant, student, guardian and admin login identities | P1 |
| 5 | M1-FOUNDATION_IDENTITY-FR-005 | Audit privileged actions; suspend accounts and revoke active sessions | P1 |
| 6 | M1-FOUNDATION_IDENTITY-FR-006 | Secure file/document download authorization for results, identity cards and receipts | P1 |

### tenant-institution

**Tenant & Institution Configuration**  |  [Module folder](../milestones/milestone-01/tenant-institution/README.md)  |  PDF pages 9-10, 20, 46  |  Depends on: foundation-identity

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-TENANT_INSTITUTION-FR-001 | Tenant provisioning and isolated institution settings | P1 |
| 2 | M1-TENANT_INSTITUTION-FR-002 | Institution type: school, college, university, medical college, madrasa or training center | P1 |
| 3 | M1-TENANT_INSTITUTION-FR-003 | Contact information, address, logos, letterhead, timezone, Bangla/English locale and public profile | P1 |
| 4 | M1-TENANT_INSTITUTION-FR-004 | Campus records, shifts, working weekdays, holiday calendar and academic date formats | P1 |
| 5 | M1-TENANT_INSTITUTION-FR-005 | Per-tenant module enablement and configurable policies | P1 |
| 6 | M1-TENANT_INSTITUTION-FR-006 | Institution dashboard with tenant-level counts and quick links | P1 |

### academic-registry

**Academic Registry & Curriculum**  |  [Module folder](../milestones/milestone-01/academic-registry/README.md)  |  PDF pages 9-10, 21, 29-30  |  Depends on: tenant-institution, foundation-identity

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-ACADEMIC_REGISTRY-FR-001 | Academic years, sessions, terms/semesters and active term selection | P1 |
| 2 | M1-ACADEMIC_REGISTRY-FR-002 | Departments, faculties, programs, batches, levels, groups and school class labels | P1 |
| 3 | M1-ACADEMIC_REGISTRY-FR-003 | Course/subject catalog including codes, optional credits and pass criteria | P1 |
| 4 | M1-ACADEMIC_REGISTRY-FR-004 | Course offerings / class sections scheduled in a term and assigned to teachers | P1 |
| 5 | M1-ACADEMIC_REGISTRY-FR-005 | Curriculum and assessment policy versions per program | P1 |
| 6 | M1-ACADEMIC_REGISTRY-FR-006 | Configurable GPA/grade scales and academic calendar rules | P1 |
| 7 | M1-ACADEMIC_REGISTRY-FR-007 | Support subject combinations and optional courses without custom columns | P1 |

### student-lifecycle

**Students, Guardians & Enrollment**  |  [Module folder](../milestones/milestone-01/student-lifecycle/README.md)  |  PDF pages 12, 14, 19-20, 48-50  |  Depends on: foundation-identity, tenant-institution, academic-registry

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-STUDENT_LIFECYCLE-FR-001 | Admin-driven student enrollment with admission number and contact details | P1 |
| 2 | M1-STUDENT_LIFECYCLE-FR-002 | Student profile including photo, emergency contact, academic history and documents | P1 |
| 3 | M1-STUDENT_LIFECYCLE-FR-003 | One or more guardians linked to a student with verified relationship and portal access | P1 |
| 4 | M1-STUDENT_LIFECYCLE-FR-004 | Program/cohort/class/section placement and academic session enrollment | P1 |
| 5 | M1-STUDENT_LIFECYCLE-FR-005 | University/medical course-offering registration and enrollment history | P1 |
| 6 | M1-STUDENT_LIFECYCLE-FR-006 | Promotion, transfer, graduation, withdrawal and re-admission status transitions | P1 |
| 7 | M1-STUDENT_LIFECYCLE-FR-007 | Class roll number uniqueness within active placement scope | P1 |
| 8 | M1-STUDENT_LIFECYCLE-FR-008 | Tenant-specific student ID card and downloadable profile information | P1 |

### faculty-staff

**Faculty, Teacher & Staff Directory**  |  [Module folder](../milestones/milestone-01/faculty-staff/README.md)  |  PDF pages 13-15, 18, 52-53  |  Depends on: foundation-identity, tenant-institution, academic-registry

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-FACULTY_STAFF-FR-001 | Register teacher, faculty, employee and non-teaching staff profiles | P1 |
| 2 | M1-FACULTY_STAFF-FR-002 | Employment designation, department, active status and employment dates | P1 |
| 3 | M1-FACULTY_STAFF-FR-003 | Teacher subject and course-offering assignments | P1 |
| 4 | M1-FACULTY_STAFF-FR-004 | Class teacher, adviser or academic supervisor assignments | P1 |
| 5 | M1-FACULTY_STAFF-FR-005 | Profile view, search, filtering and downloadable staff profile | P1 |
| 6 | M1-FACULTY_STAFF-FR-006 | Separate teaching duties from payroll and compensation data | P1 |

### scheduling

**Class, Teacher & Examination Timetables**  |  [Module folder](../milestones/milestone-01/scheduling/README.md)  |  PDF pages 28-30  |  Depends on: academic-registry, faculty-staff, student-lifecycle

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-SCHEDULING-FR-001 | Weekly schedules with period times, weekdays and academic terms | P1 |
| 2 | M1-SCHEDULING-FR-002 | Class/section schedule views and cross-class overview | P1 |
| 3 | M1-SCHEDULING-FR-003 | Faculty/teacher personal and weekly combined timetables | P1 |
| 4 | M1-SCHEDULING-FR-004 | Classroom or room assignment | P1 |
| 5 | M1-SCHEDULING-FR-005 | Time-slot conflict detection for teacher, room and student group | P1 |
| 6 | M1-SCHEDULING-FR-006 | Basic examination timetable with start/end time | P1 |
| 7 | M1-SCHEDULING-FR-007 | Publish routines to student, guardian and teacher panels | P1 |

### attendance

**Student & Staff Attendance**  |  [Module folder](../milestones/milestone-01/attendance/README.md)  |  PDF pages 15-18, 49, 52, 55  |  Depends on: academic-registry, student-lifecycle, faculty-staff, scheduling

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-ATTENDANCE-FR-001 | Record present/absent/late/excused status for an offering/class session | P1 |
| 2 | M1-ATTENDANCE-FR-002 | Bulk class roll-call with draft/save/finalize states | P1 |
| 3 | M1-ATTENDANCE-FR-003 | Staff attendance entry independent of student session attendance | P1 |
| 4 | M1-ATTENDANCE-FR-004 | Attendance corrections requiring permission and reason | P1 |
| 5 | M1-ATTENDANCE-FR-005 | Daily, monthly, student, teacher, campus and course reports | P1 |
| 6 | M1-ATTENDANCE-FR-006 | Guardians view linked students’ attendance and summary | P1 |
| 7 | M1-ATTENDANCE-FR-007 | Attendance percentages computed using configurable session eligibility | P1 |
| 8 | M1-ATTENDANCE-FR-008 | Expose attendance reporting data for future payroll and medical eligibility | P1 |

### assessment-results

**Examinations, Grades & Results**  |  [Module folder](../milestones/milestone-01/assessment-results/README.md)  |  PDF pages 21-27, 49, 53, 55-57  |  Depends on: academic-registry, student-lifecycle, faculty-staff, attendance

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-ASSESSMENT_RESULTS-FR-001 | Exam categories, assessments, exam components and subject/course mapping | P1 |
| 2 | M1-ASSESSMENT_RESULTS-FR-002 | Full marks, minimum pass marks, grade boundaries and basic weighting | P1 |
| 3 | M1-ASSESSMENT_RESULTS-FR-003 | Teacher-owned marks entry and approval workflow | P1 |
| 4 | M1-ASSESSMENT_RESULTS-FR-004 | Grade, percentage, GPA/CGPA compatible calculation; configurable grading policy | P1 |
| 5 | M1-ASSESSMENT_RESULTS-FR-005 | Provisional vs published results with authorized release | P1 |
| 6 | M1-ASSESSMENT_RESULTS-FR-006 | Printable exam result sheet, subject performance and report cards | P1 |
| 7 | M1-ASSESSMENT_RESULTS-FR-007 | Tabulation sheet, pass/fail and simple merit order when allowed | P1 |
| 8 | M1-ASSESSMENT_RESULTS-FR-008 | Guardian/student visibility only after result publication | P1 |
| 9 | M1-ASSESSMENT_RESULTS-FR-009 | Academic result snapshots for historical reproducibility | P1 |

### fee-management

**Student Fees, Dues & Cash Collection**  |  [Module folder](../milestones/milestone-01/fee-management/README.md)  |  PDF pages 10, 35-36, 48  |  Depends on: student-lifecycle, academic-registry, foundation-identity

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-FEE_MANAGEMENT-FR-001 | Institution fee types, fee groups and class/program-specific schedules | P1 |
| 2 | M1-FEE_MANAGEMENT-FR-002 | Assign one-time, monthly, term or credit-based charges | P1 |
| 3 | M1-FEE_MANAGEMENT-FR-003 | Generate student invoices and maintain outstanding dues | P1 |
| 4 | M1-FEE_MANAGEMENT-FR-004 | Cash/manual payment recording with unique receipt numbers | P1 |
| 5 | M1-FEE_MANAGEMENT-FR-005 | Partial payments, fee waivers and discount approval | P1 |
| 6 | M1-FEE_MANAGEMENT-FR-006 | Student and guardian fee history, receipts and unpaid balance views | P1 |
| 7 | M1-FEE_MANAGEMENT-FR-007 | Cashier shift/day collection report and fee-category breakdown | P1 |
| 8 | M1-FEE_MANAGEMENT-FR-008 | Preserve payment allocation and refund history; no destructive editing | P1 |

### notices-events

**Notices, Events & Calendar**  |  [Module folder](../milestones/milestone-01/notices-events/README.md)  |  PDF pages 9-10, 46, 48-50  |  Depends on: tenant-institution, academic-registry, foundation-identity

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-NOTICES_EVENTS-FR-001 | Create public, institute-wide, program, class and staff notices | P1 |
| 2 | M1-NOTICES_EVENTS-FR-002 | Attach documents and schedule publication/expiry | P1 |
| 3 | M1-NOTICES_EVENTS-FR-003 | Read institution event calendar and academic holidays | P1 |
| 4 | M1-NOTICES_EVENTS-FR-004 | Target student, guardian, teacher or staff audiences | P1 |
| 5 | M1-NOTICES_EVENTS-FR-005 | Maintain read history if policy requires acknowledgement | P1 |
| 6 | M1-NOTICES_EVENTS-FR-006 | Expose dashboard notice feed and important events | P1 |

### self-service-portals

**Student, Guardian, Teacher & Admin Portals**  |  [Module folder](../milestones/milestone-01/self-service-portals/README.md)  |  PDF pages 14-18, 48-53  |  Depends on: foundation-identity, tenant-institution, academic-registry, student-lifecycle, faculty-staff, attendance, assessment-results, fee-management, notices-events

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M1-SELF_SERVICE_PORTALS-FR-001 | Admin home with student/staff, fees, dues, attendance and exam summaries | P1 |
| 2 | M1-SELF_SERVICE_PORTALS-FR-002 | Teacher portal for assigned students, attendance, marks, schedules and notices | P1 |
| 3 | M1-SELF_SERVICE_PORTALS-FR-003 | Student portal for profile, current courses, attendance, results, fees and notices | P1 |
| 4 | M1-SELF_SERVICE_PORTALS-FR-004 | Guardian portal with linked-child switcher and access to authorized child records | P1 |
| 5 | M1-SELF_SERVICE_PORTALS-FR-005 | Accountant workspace for collections, receipts and dues | P1 |
| 6 | M1-SELF_SERVICE_PORTALS-FR-006 | Role-aware navigation and responsive Bangla/English UX | P1 |
| 7 | M1-SELF_SERVICE_PORTALS-FR-007 | Download protected receipts, profile pages and result reports | P1 |

## Milestone 2 — Advanced Automation (13 modules, 88 features)

### online-admissions

**Online Application & Admission**  |  [Module folder](../milestones/milestone-02/online-admissions/README.md)  |  PDF pages 12  |  Depends on: tenant-institution, academic-registry, student-lifecycle, fee-management, exam-operations

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-ONLINE_ADMISSIONS-FR-001 | Public admission campaigns, eligibility criteria and available seats | P2 |
| 2 | M2-ONLINE_ADMISSIONS-FR-002 | Configurable application forms and applicant document uploads | P2 |
| 3 | M2-ONLINE_ADMISSIONS-FR-003 | Application submission with reference number and downloadable filled form | P2 |
| 4 | M2-ONLINE_ADMISSIONS-FR-004 | Application fee charge/payment state | P2 |
| 5 | M2-ONLINE_ADMISSIONS-FR-005 | Application review, status changes and admissions selection | P2 |
| 6 | M2-ONLINE_ADMISSIONS-FR-006 | Admit card after verified payment when admission exam is enabled | P2 |
| 7 | M2-ONLINE_ADMISSIONS-FR-007 | Offer, accept, enroll and reject transitions with audit | P2 |

### staff-recruitment

**Faculty & Staff Recruitment**  |  [Module folder](../milestones/milestone-02/staff-recruitment/README.md)  |  PDF pages 13  |  Depends on: faculty-staff, fee-management, tenant-institution

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-STAFF_RECRUITMENT-FR-001 | Create teaching and non-teaching vacancies and public application windows | P2 |
| 2 | M2-STAFF_RECRUITMENT-FR-002 | Job applicant profile, documents and online submission | P2 |
| 3 | M2-STAFF_RECRUITMENT-FR-003 | Recruitment application fee and verification | P2 |
| 4 | M2-STAFF_RECRUITMENT-FR-004 | Print submitted application and recruitment admit card | P2 |
| 5 | M2-STAFF_RECRUITMENT-FR-005 | Shortlisting, interview stages and offer tracking | P2 |
| 6 | M2-STAFF_RECRUITMENT-FR-006 | Convert accepted applicant into M1 staff member | P2 |

### leave-workflows

**Leave Request & Approvals**  |  [Module folder](../milestones/milestone-02/leave-workflows/README.md)  |  PDF pages 19, 53, 55  |  Depends on: student-lifecycle, faculty-staff, attendance

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-LEAVE_WORKFLOWS-FR-001 | Student/guardian and staff leave application | P2 |
| 2 | M2-LEAVE_WORKFLOWS-FR-002 | Leave category, dates, attachments and reason | P2 |
| 3 | M2-LEAVE_WORKFLOWS-FR-003 | Flexible approval chain with recommend/forward/approve/reject | P2 |
| 4 | M2-LEAVE_WORKFLOWS-FR-004 | Leave balance and holiday overlap checks where appropriate | P2 |
| 5 | M2-LEAVE_WORKFLOWS-FR-005 | Leave history and reports by student/teacher | P2 |
| 6 | M2-LEAVE_WORKFLOWS-FR-006 | Approved leave integrated with attendance without deleting prior marks | P2 |

### device-attendance

**Biometric, RFID & Device Attendance**  |  [Module folder](../milestones/milestone-02/device-attendance/README.md)  |  PDF pages 15-18  |  Depends on: attendance, faculty-staff, student-lifecycle

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-DEVICE_ATTENDANCE-FR-001 | Device registry per institution/campus | P2 |
| 2 | M2-DEVICE_ATTENDANCE-FR-002 | External vendor bridge for RFID, card, fingerprint or face attendance data | P2 |
| 3 | M2-DEVICE_ATTENDANCE-FR-003 | Per-device staff/student identity mapping | P2 |
| 4 | M2-DEVICE_ATTENDANCE-FR-004 | Idempotent attendance event ingestion with clock synchronization | P2 |
| 5 | M2-DEVICE_ATTENDANCE-FR-005 | Review and reconcile missing/duplicate/late records | P2 |
| 6 | M2-DEVICE_ATTENDANCE-FR-006 | Automated attendance notifications and status alerts | P2 |
| 7 | M2-DEVICE_ATTENDANCE-FR-007 | Expose staff attendance events for payroll rules | P2 |

### advanced-examinations

**Advanced Grading, Analysis & Report Cards**  |  [Module folder](../milestones/milestone-02/advanced-examinations/README.md)  |  PDF pages 22-27, 58-63  |  Depends on: assessment-results, academic-registry, attendance

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-ADVANCED_EXAMINATIONS-FR-001 | Weighted class tests, monthly tests, homework and continuous assessments | P2 |
| 2 | M2-ADVANCED_EXAMINATIONS-FR-002 | Aggregate semester, annual and cross-term results | P2 |
| 3 | M2-ADVANCED_EXAMINATIONS-FR-003 | Combine two or more subjects for pass/fail and GPA calculations | P2 |
| 4 | M2-ADVANCED_EXAMINATIONS-FR-004 | Optional/excluded subjects, grace marks and fail highlighting | P2 |
| 5 | M2-ADVANCED_EXAMINATIONS-FR-005 | Teacher evaluation notes and attendance on report card | P2 |
| 6 | M2-ADVANCED_EXAMINATIONS-FR-006 | Class/section merit rank, fail list and performance distribution | P2 |
| 7 | M2-ADVANCED_EXAMINATIONS-FR-007 | Custom report card templates, seals, logos and auto-signatures | P2 |
| 8 | M2-ADVANCED_EXAMINATIONS-FR-008 | Compact and detailed tabulations, teacher-wise and subject-wise analytics | P2 |
| 9 | M2-ADVANCED_EXAMINATIONS-FR-009 | School-specific and madrasa-specific layouts from brochure examples | P2 |

### exam-operations

**Exam Admit Cards & Seat Plans**  |  [Module folder](../milestones/milestone-02/exam-operations/README.md)  |  PDF pages 28  |  Depends on: assessment-results, scheduling, student-lifecycle

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-EXAM_OPERATIONS-FR-001 | Admit cards with photo, student identifiers, subjects, date/time and signature | P2 |
| 2 | M2-EXAM_OPERATIONS-FR-002 | Exam seat plan by room capacity and candidate eligibility | P2 |
| 3 | M2-EXAM_OPERATIONS-FR-003 | Seat cards with student photo, class/group, shift and roll | P2 |
| 4 | M2-EXAM_OPERATIONS-FR-004 | Room invigilator assignment and signature fields | P2 |
| 5 | M2-EXAM_OPERATIONS-FR-005 | Printable bulk PDF generation with preview and audit | P2 |
| 6 | M2-EXAM_OPERATIONS-FR-006 | Exam admission eligibility integration with institution policy | P2 |

### online-fee-payments

**Online Payments & Reconciliation**  |  [Module folder](../milestones/milestone-02/online-fee-payments/README.md)  |  PDF pages 35-36, 48  |  Depends on: fee-management, foundation-identity, tenant-institution

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-ONLINE_FEE_PAYMENTS-FR-001 | Hosted checkout for guardian and student fee dues | P2 |
| 2 | M2-ONLINE_FEE_PAYMENTS-FR-002 | Payment provider configuration per institution with controlled secrets | P2 |
| 3 | M2-ONLINE_FEE_PAYMENTS-FR-003 | Payment initiation, redirect and server-side webhook validation | P2 |
| 4 | M2-ONLINE_FEE_PAYMENTS-FR-004 | Pending, authorized, captured, failed, refunded and reconciled states | P2 |
| 5 | M2-ONLINE_FEE_PAYMENTS-FR-005 | Payment idempotency and duplicate webhook handling | P2 |
| 6 | M2-ONLINE_FEE_PAYMENTS-FR-006 | Partial fee invoice allocations and receipt generation on final capture | P2 |
| 7 | M2-ONLINE_FEE_PAYMENTS-FR-007 | Cash vs online collection reporting and payout reconciliation | P2 |

### accounting-ledger

**Accounting & General Ledger**  |  [Module folder](../milestones/milestone-02/accounting-ledger/README.md)  |  PDF pages 35, 37-39  |  Depends on: tenant-institution, fee-management

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-ACCOUNTING_LEDGER-FR-001 | Chart of accounts and configurable fiscal years | P2 |
| 2 | M2-ACCOUNTING_LEDGER-FR-002 | Manual income and expense vouchers with review/approval | P2 |
| 3 | M2-ACCOUNTING_LEDGER-FR-003 | Ledger posting journal and reversals (not destructive delete) | P2 |
| 4 | M2-ACCOUNTING_LEDGER-FR-004 | Receipt/voucher daily topsheets and register | P2 |
| 5 | M2-ACCOUNTING_LEDGER-FR-005 | Income/expense statements and general ledger (detail/summary) | P2 |
| 6 | M2-ACCOUNTING_LEDGER-FR-006 | Billing and invoice attachment references | P2 |
| 7 | M2-ACCOUNTING_LEDGER-FR-007 | Post fee payments, waivers, refunds and donations via explicitly versioned integration events | P2 |

### staff-payroll

**Payroll, Deductions & Provident Fund**  |  [Module folder](../milestones/milestone-02/staff-payroll/README.md)  |  PDF pages 15, 43, 53  |  Depends on: faculty-staff, attendance, leave-workflows, accounting-ledger

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-STAFF_PAYROLL-FR-001 | Compensation policies, salary structures and payment cycles | P2 |
| 2 | M2-STAFF_PAYROLL-FR-002 | Attendance-based deductions using policy version | P2 |
| 3 | M2-STAFF_PAYROLL-FR-003 | Manual adjustments, deduction waivers and approvals | P2 |
| 4 | M2-STAFF_PAYROLL-FR-004 | Monthly salary generation and payroll approval/lock | P2 |
| 5 | M2-STAFF_PAYROLL-FR-005 | Downloadable employee payslips and payroll reports | P2 |
| 6 | M2-STAFF_PAYROLL-FR-006 | Provident fund contribution and balance records | P2 |
| 7 | M2-STAFF_PAYROLL-FR-007 | Accounting integration for salary expenses and liabilities | P2 |

### messaging-sms

**In-App Messaging, SMS & Notifications**  |  [Module folder](../milestones/milestone-02/messaging-sms/README.md)  |  PDF pages 10, 15, 35, 44  |  Depends on: foundation-identity, student-lifecycle, faculty-staff, attendance, fee-management, assessment-results, notices-events

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-MESSAGING_SMS-FR-001 | Guardian/teacher in-app threads and message notifications | P2 |
| 2 | M2-MESSAGING_SMS-FR-002 | SMS templates with placeholders and preview | P2 |
| 3 | M2-MESSAGING_SMS-FR-003 | Unicode, masking/non-masking and provider-specific delivery settings | P2 |
| 4 | M2-MESSAGING_SMS-FR-004 | Bulk recipient selection from student, teacher and manual phone groups | P2 |
| 5 | M2-MESSAGING_SMS-FR-005 | Saved recipient groups and duplicate recipient suppression | P2 |
| 6 | M2-MESSAGING_SMS-FR-006 | Automated attendance, due, payment, result and greeting alerts | P2 |
| 7 | M2-MESSAGING_SMS-FR-007 | SMS delivery reports and failed-message retry policies | P2 |
| 8 | M2-MESSAGING_SMS-FR-008 | Notification preferences and push/email provider abstraction | P2 |

### lesson-plans

**Lesson Plans, Diaries & Student Progress**  |  [Module folder](../milestones/milestone-02/lesson-plans/README.md)  |  PDF pages 31, 50, 53  |  Depends on: academic-registry, scheduling, student-lifecycle, faculty-staff

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-LESSON_PLANS-FR-001 | Teacher-created subject/course lesson plans by academic term | P2 |
| 2 | M2-LESSON_PLANS-FR-002 | Per-day class diary and homework tasks | P2 |
| 3 | M2-LESSON_PLANS-FR-003 | Individual student daily lesson evaluation and comments | P2 |
| 4 | M2-LESSON_PLANS-FR-004 | Monthly subject-wise progress summaries | P2 |
| 5 | M2-LESSON_PLANS-FR-005 | Student/guardian access to published diaries and evaluations | P2 |
| 6 | M2-LESSON_PLANS-FR-006 | Teacher workload views and learning progress export | P2 |

### certificates

**Certificates & Enhanced ID Card Designer**  |  [Module folder](../milestones/milestone-02/certificates/README.md)  |  PDF pages 19-20  |  Depends on: student-lifecycle, faculty-staff, tenant-institution

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-CERTIFICATES-FR-001 | Issue character/testimonial, transfer and other school certificates | P2 |
| 2 | M2-CERTIFICATES-FR-002 | Configurable certificate numbering and verification links | P2 |
| 3 | M2-CERTIFICATES-FR-003 | ID front/back template designer with portrait/landscape layouts | P2 |
| 4 | M2-CERTIFICATES-FR-004 | Separate teacher, staff, student and campus templates | P2 |
| 5 | M2-CERTIFICATES-FR-005 | Merge authorized dynamic profile fields and headmaster signature | P2 |
| 6 | M2-CERTIFICATES-FR-006 | Bulk print and PDF export with issuance audit | P2 |

### feedback-committees

**Feedback & Basic Committee Administration**  |  [Module folder](../milestones/milestone-02/feedback-committees/README.md)  |  PDF pages 46  |  Depends on: foundation-identity, tenant-institution, student-lifecycle

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M2-FEEDBACK_COMMITTEES-FR-001 | Guardian suggestions, feedback and complaint submission | P2 |
| 2 | M2-FEEDBACK_COMMITTEES-FR-002 | Categorization, ownership and response history | P2 |
| 3 | M2-FEEDBACK_COMMITTEES-FR-003 | Private vs published responses and closure status | P2 |
| 4 | M2-FEEDBACK_COMMITTEES-FR-004 | Administrative committee creation, dates and member roster | P2 |
| 5 | M2-FEEDBACK_COMMITTEES-FR-005 | Committee membership history and read permissions | P2 |
| 6 | M2-FEEDBACK_COMMITTEES-FR-006 | Response time and unresolved issue reports | P2 |

## Milestone 3 — Specialized & Enterprise Extensions (10 modules, 66 features)

### inventory

**Inventory & Warehouse Operations**  |  [Module folder](../milestones/milestone-03/inventory/README.md)  |  PDF pages 10, 41  |  Depends on: tenant-institution, student-lifecycle, faculty-staff, accounting-ledger

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-INVENTORY-FR-001 | Master item catalogue, unit and reorder threshold | P3 |
| 2 | M3-INVENTORY-FR-002 | Warehouse/store locations per campus | P3 |
| 3 | M3-INVENTORY-FR-003 | Supplier purchase on cash or credit with stock receipt | P3 |
| 4 | M3-INVENTORY-FR-004 | Issue/sell items to students, staff or teachers and print receipt | P3 |
| 5 | M3-INVENTORY-FR-005 | Stock deductions, adjustments and transfer between warehouses | P3 |
| 6 | M3-INVENTORY-FR-006 | Stock ledger and warehouse-wise availability reports | P3 |

### library

**Library & Lending**  |  [Module folder](../milestones/milestone-03/library/README.md)  |  PDF pages 10, 42  |  Depends on: student-lifecycle, faculty-staff, fee-management

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-LIBRARY-FR-001 | Catalog books, magazines, CDs and other library assets | P3 |
| 2 | M3-LIBRARY-FR-002 | Multiple physical copies and searchable catalogue | P3 |
| 3 | M3-LIBRARY-FR-003 | Borrow and return transactions for authorized members | P3 |
| 4 | M3-LIBRARY-FR-004 | Loan due dates, reservation and overdue list | P3 |
| 5 | M3-LIBRARY-FR-005 | Lost/damaged copy adjustments and reports | P3 |
| 6 | M3-LIBRARY-FR-006 | Optional automated library fines invoiced to M1 fees | P3 |

### hostel

**Hostel, Housing & Residence Fees**  |  [Module folder](../milestones/milestone-03/hostel/README.md)  |  PDF pages 10, 42  |  Depends on: student-lifecycle, fee-management, tenant-institution

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-HOSTEL-FR-001 | Hostel/building/floor/room/bed catalogue and capacity | P3 |
| 2 | M3-HOSTEL-FR-002 | Student room or bed assignment and release with occupancy history | P3 |
| 3 | M3-HOSTEL-FR-003 | Hostel and meal charge configuration | P3 |
| 4 | M3-HOSTEL-FR-004 | Automatic monthly room/meal charge generation | P3 |
| 5 | M3-HOSTEL-FR-005 | Hostel due collection through the Fees module | P3 |
| 6 | M3-HOSTEL-FR-006 | Occupancy, vacancy and hostel resident reports | P3 |

### donations

**Donations & Donor Pledges**  |  [Module folder](../milestones/milestone-03/donations/README.md)  |  PDF pages 10, 43  |  Depends on: accounting-ledger, messaging-sms, tenant-institution

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-DONATIONS-FR-001 | Donor profile and communication consent | P3 |
| 2 | M3-DONATIONS-FR-002 | Monthly/annual pledge schedules and expected dues | P3 |
| 3 | M3-DONATIONS-FR-003 | Record one-time or recurring donation receipts | P3 |
| 4 | M3-DONATIONS-FR-004 | Donor receipts and acknowledgments | P3 |
| 5 | M3-DONATIONS-FR-005 | Donation due reminders through Messaging | P3 |
| 6 | M3-DONATIONS-FR-006 | Accounting income integration and pledge status reports | P3 |

### hifz

**Hifz Department & Assessment**  |  [Module folder](../milestones/milestone-03/hifz/README.md)  |  PDF pages 10, 45  |  Depends on: student-lifecycle, faculty-staff, assessment-results

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-HIFZ-FR-001 | Hifz department/group creation and group teacher assignment | P3 |
| 2 | M3-HIFZ-FR-002 | Student group membership, list, filters and search | P3 |
| 3 | M3-HIFZ-FR-003 | Monthly memorization progress and lesson observations | P3 |
| 4 | M3-HIFZ-FR-004 | Hifz-specific examination categories, marks and outcomes | P3 |
| 5 | M3-HIFZ-FR-005 | Hifz tabulation, merit lists and specialized report formats | P3 |
| 6 | M3-HIFZ-FR-006 | Allow Hifz-specific workflows without introducing school-only constraints elsewhere | P3 |

### learning-management

**Online Courses, Assignments & Quizzes**  |  [Module folder](../milestones/milestone-03/learning-management/README.md)  |  PDF pages 32-33, 50  |  Depends on: academic-registry, student-lifecycle, faculty-staff, assessment-results

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-LEARNING_MANAGEMENT-FR-001 | Google Classroom-like online course workspace | P3 |
| 2 | M3-LEARNING_MANAGEMENT-FR-002 | Learning materials, attachments, class notes and published syllabus | P3 |
| 3 | M3-LEARNING_MANAGEMENT-FR-003 | Assignments, submission windows and uploads | P3 |
| 4 | M3-LEARNING_MANAGEMENT-FR-004 | Teacher reviews of submitted files and online marking | P3 |
| 5 | M3-LEARNING_MANAGEMENT-FR-005 | MCQ quiz bank, attempts, scoring and time limits | P3 |
| 6 | M3-LEARNING_MANAGEMENT-FR-006 | Student course activity and progress dashboards | P3 |
| 7 | M3-LEARNING_MANAGEMENT-FR-007 | Optional sync of graded assessment outcomes into the Results module | P3 |

### medical-education

**Medical College Academic Operations**  |  [Module folder](../milestones/milestone-03/medical-education/README.md)  |  PDF pages 54-57  |  Depends on: academic-registry, student-lifecycle, attendance, assessment-results, leave-workflows, messaging-sms, faculty-staff

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-MEDICAL_EDUCATION-FR-001 | Lecture, tutorial, ward and clinical group teaching sessions | P3 |
| 2 | M3-MEDICAL_EDUCATION-FR-002 | Full-batch, group/ward and subject-specific attendance reporting | P3 |
| 3 | M3-MEDICAL_EDUCATION-FR-003 | Configurable attendance warnings including the example 75% rule | P3 |
| 4 | M3-MEDICAL_EDUCATION-FR-004 | Multi-stage leave recommendation/forwarding/approval in medical programs | P3 |
| 5 | M3-MEDICAL_EDUCATION-FR-005 | Item, card and term exam marking with rank/fail highlighting | P3 |
| 6 | M3-MEDICAL_EDUCATION-FR-006 | Professional exam eligibility report with reasons from attendance and results | P3 |
| 7 | M3-MEDICAL_EDUCATION-FR-007 | Student medical academic dashboard with threshold warnings | P3 |
| 8 | M3-MEDICAL_EDUCATION-FR-008 | Anonymous student-to-teacher evaluation and aggregate summaries | P3 |

### institutional-governance

**Governance, Committees & Audit**  |  [Module folder](../milestones/milestone-03/institutional-governance/README.md)  |  PDF pages 9, 46  |  Depends on: foundation-identity, feedback-committees, tenant-institution

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-INSTITUTIONAL_GOVERNANCE-FR-001 | Committee roles, terms, agenda and meeting minutes | P3 |
| 2 | M3-INSTITUTIONAL_GOVERNANCE-FR-002 | Approval chains for major academic and financial decisions | P3 |
| 3 | M3-INSTITUTIONAL_GOVERNANCE-FR-003 | Policy approval and review versions | P3 |
| 4 | M3-INSTITUTIONAL_GOVERNANCE-FR-004 | Audit log search, filters and privileged access reviews | P3 |
| 5 | M3-INSTITUTIONAL_GOVERNANCE-FR-005 | Role delegation and temporary permissions | P3 |
| 6 | M3-INSTITUTIONAL_GOVERNANCE-FR-006 | Retention and export controls for institution records | P3 |

### analytics-insights

**Advanced Academic & Operational Analytics**  |  [Module folder](../milestones/milestone-03/analytics-insights/README.md)  |  PDF pages 15-18, 24-27, 31, 35-39, 55-57  |  Depends on: attendance, assessment-results, fee-management, student-lifecycle, faculty-staff, accounting-ledger

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-ANALYTICS_INSIGHTS-FR-001 | Longitudinal attendance, exam, fee and staff trends | P3 |
| 2 | M3-ANALYTICS_INSIGHTS-FR-002 | Student performance by course, program, year and cohort | P3 |
| 3 | M3-ANALYTICS_INSIGHTS-FR-003 | Grade distribution, pass/fail and institutional comparison | P3 |
| 4 | M3-ANALYTICS_INSIGHTS-FR-004 | Teacher/class-level performance analysis with fair-context metadata | P3 |
| 5 | M3-ANALYTICS_INSIGHTS-FR-005 | At-risk indicators based on transparent policy-defined thresholds | P3 |
| 6 | M3-ANALYTICS_INSIGHTS-FR-006 | Institution-level analytics exports with authorized drilldowns | P3 |
| 7 | M3-ANALYTICS_INSIGHTS-FR-007 | Optional AI-assisted insights gated by privacy controls | P3 |

### saas-enterprise

**SaaS Commercial Operations & Enterprise Extensions**  |  [Module folder](../milestones/milestone-03/saas-enterprise/README.md)  |  PDF pages 9, 20, 46  |  Depends on: foundation-identity, tenant-institution, accounting-ledger, analytics-insights

| # | ID | Feature | Priority |
| --- | --- | --- | --- |
| 1 | M3-SAAS_ENTERPRISE-FR-001 | Subscription plans, feature entitlements and usage limit enforcement | P3 |
| 2 | M3-SAAS_ENTERPRISE-FR-002 | Trial, activation, renewal and plan change workflows | P3 |
| 3 | M3-SAAS_ENTERPRISE-FR-003 | Institution self-service branding and optional custom domains | P3 |
| 4 | M3-SAAS_ENTERPRISE-FR-004 | Central platform support tools with audited break-glass access | P3 |
| 5 | M3-SAAS_ENTERPRISE-FR-005 | Tenant-scoped backups, export and disaster recovery procedures | P3 |
| 6 | M3-SAAS_ENTERPRISE-FR-006 | Advanced campus hierarchy, delegated regional admin and consolidated reporting | P3 |
| 7 | M3-SAAS_ENTERPRISE-FR-007 | External API keys, integration registry and rate limits | P3 |
| 8 | M3-SAAS_ENTERPRISE-FR-008 | Automated provisioning/deprovisioning and compliant tenant data export | P3 |
