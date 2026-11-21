# Web Portal & Route Inventory

## Institution administration

`/dashboard`, `/institution/settings`, `/academics/years`, `/academics/programs`, `/academics/courses`, `/academics/offerings`, `/students`, `/staff`, `/attendance`, `/exams`, `/fees`, `/schedules`, `/notices`, `/reports`.

## Teacher/faculty

`/teacher`, `/teacher/classes`, `/teacher/attendance`, `/teacher/marks`, `/teacher/schedule`, `/teacher/lesson-plans`, `/teacher/leave`, `/teacher/payslips` (last two in M2).

## Student

`/student`, `/student/profile`, `/student/courses`, `/student/attendance`, `/student/results`, `/student/fees`, `/student/notices`, `/student/lms` (last in M3).

## Guardian

`/guardian`, `/guardian/children/{studentId}`, `/guardian/children/{studentId}/attendance`, `/guardian/children/{studentId}/results`, `/guardian/children/{studentId}/fees`, `/guardian/messages` (M2).

## Finance

`/finance/fees`, `/finance/collections`, `/finance/dues`, `/finance/accounting` (M2), `/finance/payroll` (M2), `/finance/donations` (M3).

## Specialized institutions

`/medical/rotations`, `/medical/exams`, `/medical/eligibility`, `/hifz/groups`, `/hifz/progress`, `/hostels`, `/library`, `/inventory` (M3).

Route groups and URL segments are **proposals**; review Next.js App Router information architecture alongside module OpenAPI contracts. Tenant context must be validated server-side irrespective of route naming.
