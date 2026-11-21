# Dependency Order & Integration Sequencing

## Parallel-first plan

**Wave A (M1 foundation):** IdentityAccess + TenantInstitution + monorepo/CI/DB conventions. AcademicRegistry starts after tenant contract shape is approved.

**Wave B (M1 core records):** StudentLifecycle, FacultyStaff and AcademicRegistry contracts. UI platform can build public sign-in and shell in parallel.

**Wave C (M1 transactions):** Scheduling, Attendance, AssessmentResults, FeeManagement and NoticesEvents each own code and mocks for upstream contracts.

**Wave D (M1 release):** Portals, generated API client, integrated cross-tenant security tests and staging deployment.

**Wave E (M2):** Admissions and Recruitment; Leave and Devices; AdvancedExaminations and ExamOperations; OnlinePayments and Accounting; Payroll, Messaging, TeachingProgress, Certificates and Feedback. Prioritize Accounting contract before payroll and payments.

**Wave F (M3):** Inventory, Library, Hostel, Donations, Hifz, LMS and MedicalEducation can be independent workstreams after core API is stable; Analytics and SaaS enterprise capabilities consume integrated events and projections.

## No direct database coupling

Events and public application contracts are the unit of coordination. If Module A requires Module B to answer synchronously, B exports a stable application interface or read projection; never inject B's DbContext into A.

## Critical integration sequencing examples

- Fees -> Payments -> Accounting: do not rely on browser redirects, ensure outbox/inbox dedupe.
- Attendance -> Leave/Payroll/Medical: policy-aware status and immutable corrections.
- AcademicRegistry -> Exams/Teaching/Medical: CourseOffering and policy versions as shared identifiers.
- StudentLifecycle -> GuardianPortal: relationship authorization in every student-specific endpoint.
