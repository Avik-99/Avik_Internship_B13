# Cross-Module Integration Event Catalogue

## Protocol

- Every event is published only after source transaction commits via transactional outbox.
- Metadata: `eventId`, `tenantId`, `eventType`, `version`, `occurredAtUtc`, `correlationId`, `causationId`, `producer`, `payload`.
- Consumers deduplicate through inbox by eventId, handle retries and dead letters, and do not assume ordering across aggregates.
- Increment event version for breaking payload changes; preserve compatibility until consumers migrate.
- Use events for integration, not to circumvent authorization or execute direct writes to another module’s private tables.

## Proposed event list

| Publisher module | Event name | Consumer/ownership note |
| --- | --- | --- |
| foundation-identity | Identity.UserInvited.v1 | Identity owns publication; downstream consumers may subscribe only through the event contract |
| foundation-identity | Identity.MembershipActivated.v1 | Identity owns publication; downstream consumers may subscribe only through the event contract |
| tenant-institution | Institution.Created.v1 | Institution owns publication; downstream consumers may subscribe only through the event contract |
| tenant-institution | Institution.PolicyChanged.v1 | Institution owns publication; downstream consumers may subscribe only through the event contract |
| academic-registry | Academics.TermOpened.v1 | Academics owns publication; downstream consumers may subscribe only through the event contract |
| academic-registry | Academics.CourseOfferingPublished.v1 | Academics owns publication; downstream consumers may subscribe only through the event contract |
| student-lifecycle | Students.Created.v1 | Students owns publication; downstream consumers may subscribe only through the event contract |
| student-lifecycle | Students.Enrolled.v1 | Students owns publication; downstream consumers may subscribe only through the event contract |
| student-lifecycle | Students.StatusChanged.v1 | Students owns publication; downstream consumers may subscribe only through the event contract |
| faculty-staff | Staff.Joined.v1 | Staff owns publication; downstream consumers may subscribe only through the event contract |
| faculty-staff | Staff.AssignmentChanged.v1 | Staff owns publication; downstream consumers may subscribe only through the event contract |
| scheduling | Schedules.Published.v1 | Schedules owns publication; downstream consumers may subscribe only through the event contract |
| attendance | Attendance.SessionFinalized.v1 | Attendance owns publication; downstream consumers may subscribe only through the event contract |
| attendance | Attendance.RecordCorrected.v1 | Attendance owns publication; downstream consumers may subscribe only through the event contract |
| assessment-results | Assessments.MarksApproved.v1 | Assessments owns publication; downstream consumers may subscribe only through the event contract |
| assessment-results | Assessments.ResultsPublished.v1 | Assessments owns publication; downstream consumers may subscribe only through the event contract |
| fee-management | Fees.InvoiceIssued.v1 | Fees owns publication; downstream consumers may subscribe only through the event contract |
| fee-management | Fees.PaymentRecorded.v1 | Fees owns publication; downstream consumers may subscribe only through the event contract |
| fee-management | Fees.FeeWaived.v1 | Fees owns publication; downstream consumers may subscribe only through the event contract |
| notices-events | Notices.Published.v1 | Notices owns publication; downstream consumers may subscribe only through the event contract |
| online-admissions | Admissions.ApplicationSubmitted.v1 | Admissions owns publication; downstream consumers may subscribe only through the event contract |
| online-admissions | Admissions.ApplicationAccepted.v1 | Admissions owns publication; downstream consumers may subscribe only through the event contract |
| staff-recruitment | Recruitment.ApplicationReceived.v1 | Recruitment owns publication; downstream consumers may subscribe only through the event contract |
| staff-recruitment | Recruitment.ApplicantHired.v1 | Recruitment owns publication; downstream consumers may subscribe only through the event contract |
| leave-workflows | Leave.RequestApproved.v1 | Leave owns publication; downstream consumers may subscribe only through the event contract |
| leave-workflows | Leave.RequestRejected.v1 | Leave owns publication; downstream consumers may subscribe only through the event contract |
| device-attendance | AttendanceDevice.PunchImported.v1 | AttendanceDevice owns publication; downstream consumers may subscribe only through the event contract |
| advanced-examinations | Assessments.AdvancedResultPublished.v1 | Assessments owns publication; downstream consumers may subscribe only through the event contract |
| exam-operations | ExamOperations.SeatsAllocated.v1 | ExamOperations owns publication; downstream consumers may subscribe only through the event contract |
| online-fee-payments | Payments.Captured.v1 | Payments owns publication; downstream consumers may subscribe only through the event contract |
| online-fee-payments | Payments.Refunded.v1 | Payments owns publication; downstream consumers may subscribe only through the event contract |
| accounting-ledger | Accounting.JournalPosted.v1 | Accounting owns publication; downstream consumers may subscribe only through the event contract |
| staff-payroll | Payroll.RunApproved.v1 | Payroll owns publication; downstream consumers may subscribe only through the event contract |
| messaging-sms | Messaging.MessageSent.v1 | Messaging owns publication; downstream consumers may subscribe only through the event contract |
| messaging-sms | Messaging.DeliveryFailed.v1 | Messaging owns publication; downstream consumers may subscribe only through the event contract |
| lesson-plans | Teaching.ProgressPublished.v1 | Teaching owns publication; downstream consumers may subscribe only through the event contract |
| certificates | Certificates.Issued.v1 | Certificates owns publication; downstream consumers may subscribe only through the event contract |
| feedback-committees | Feedback.Submitted.v1 | Feedback owns publication; downstream consumers may subscribe only through the event contract |
| feedback-committees | Feedback.Resolved.v1 | Feedback owns publication; downstream consumers may subscribe only through the event contract |
| inventory | Inventory.StockMoved.v1 | Inventory owns publication; downstream consumers may subscribe only through the event contract |
| library | Library.ItemLoaned.v1 | Library owns publication; downstream consumers may subscribe only through the event contract |
| library | Library.ItemReturned.v1 | Library owns publication; downstream consumers may subscribe only through the event contract |
| hostel | Housing.Assigned.v1 | Housing owns publication; downstream consumers may subscribe only through the event contract |
| hostel | Housing.ChargeGenerated.v1 | Housing owns publication; downstream consumers may subscribe only through the event contract |
| donations | Donations.DonationCollected.v1 | Donations owns publication; downstream consumers may subscribe only through the event contract |
| hifz | Hifz.ProgressRecorded.v1 | Hifz owns publication; downstream consumers may subscribe only through the event contract |
| learning-management | Lms.AssignmentGraded.v1 | Lms owns publication; downstream consumers may subscribe only through the event contract |
| medical-education | Medical.EligibilityCalculated.v1 | Medical owns publication; downstream consumers may subscribe only through the event contract |
| institutional-governance | Governance.DecisionRecorded.v1 | Governance owns publication; downstream consumers may subscribe only through the event contract |
| analytics-insights | Analytics.SnapshotGenerated.v1 | Analytics owns publication; downstream consumers may subscribe only through the event contract |
| saas-enterprise | SaaS.SubscriptionChanged.v1 | SaaS owns publication; downstream consumers may subscribe only through the event contract |

## Example workflow 1: Fees and Accounting

`Fees.PaymentRecorded.v1` after cash receipt → Accounting applies configured debit/credit posting exactly once. After online payment captured, OnlinePayments requests Fees to record the payment. Accounting does not query fee DB tables.

## Example workflow 2: Admissions and Student

Admissions approves a candidate → StudentLifecycle application service enrolls applicant → `Students.Created.v1` or `Students.Enrolled.v1`. Do not duplicate Student records in Admissions.

## Example workflow 3: Attendance and medical eligibility

Attendance emits session status/approved correction; MedicalEducation consumes read-only attendance projections with approved policy to compute eligibility snapshot, keeping calculations versioned.
