# Milestone 1 — Mandatory, Deployable Core

**Scope:** 11 bounded modules. The PDF is a feature reference; institution configuration and SaaS architecture are Biddakool design additions.

## Module delivery roster

| Module folder | Responsibility | PDF page(s) | Dependencies |
| --- | --- | --- | --- |
| foundation-identity | Identity & Access Control | 9-10, 46 | Foundation |
| tenant-institution | Tenant & Institution Configuration | 9-10, 20, 46 | foundation-identity |
| academic-registry | Academic Registry & Curriculum | 9-10, 21, 29-30 | tenant-institution, foundation-identity |
| student-lifecycle | Students, Guardians & Enrollment | 12, 14, 19-20, 48-50 | foundation-identity, tenant-institution, academic-registry |
| faculty-staff | Faculty, Teacher & Staff Directory | 13-15, 18, 52-53 | foundation-identity, tenant-institution, academic-registry |
| scheduling | Class, Teacher & Examination Timetables | 28-30 | academic-registry, faculty-staff, student-lifecycle |
| attendance | Student & Staff Attendance | 15-18, 49, 52, 55 | academic-registry, student-lifecycle, faculty-staff, scheduling |
| assessment-results | Examinations, Grades & Results | 21-27, 49, 53, 55-57 | academic-registry, student-lifecycle, faculty-staff, attendance |
| fee-management | Student Fees, Dues & Cash Collection | 10, 35-36, 48 | student-lifecycle, academic-registry, foundation-identity |
| notices-events | Notices, Events & Calendar | 9-10, 46, 48-50 | tenant-institution, academic-registry, foundation-identity |
| self-service-portals | Student, Guardian, Teacher & Admin Portals | 14-18, 48-53 | foundation-identity, tenant-institution, academic-registry, student-lifecycle, faculty-staff, attendance, assessment-results, fee-management, notices-events |

## Milestone exit criteria

- [ ] Tenant isolation and all role-scoped portals work.
- [ ] Admin can register students and faculty, configure classes/courses/terms, schedule activities, take attendance, publish results and collect cash fees.
- [ ] Guardian can inspect only a linked student’s results, fees, attendance and notices.
- [ ] Institution type supports school, college, university and medical academic records from M1.
- [ ] Security, production deployment, monitoring and backups verified.

## Delivery protocol

1. Merge shared contracts and approved DB/architecture ADRs first.
2. Develop modules concurrently using mocked upstream interfaces.
3. Integrate via published commands and versioned events, never shared EF contexts.
4. Run full tenant-isolation, permission, CI, migration, security and E2E release gates.
5. Demo end-to-end journeys and capture evidence in `docs/18-INTEGRATION-TEST-MATRIX.md`.
