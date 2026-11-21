# Non-Functional Requirements & Reviewable Quality Gates

## Security and privacy

Tenant isolation, policy authorization, traceable privilege changes, PII minimization, encryption in transit, secrets management, safe uploads, administrator MFA and immutable source-of-truth financial/exam history.

## Performance

Every list is paginated; avoid ORM N+1 queries; query performance verified with realistic institution sizes; expensive result exports and bulk notifications run as jobs. Numerical SLOs/latency targets are pending business approval, not invented here.

## Accessibility & localization

Responsive Next.js support, keyboard and screen reader testing, logical tab order, high contrast, Bangla/English input and date/number formatting. Fonts and report card rendering are tested for Bangla character correctness.

## Reliability & operations

Backups with restore tests, health checks, request tracing, outbox/inbox failure monitoring, idempotent batch operations, production migration practices, incident response runbook and audit retention.

## Data integrity

Published academic results, attendance corrections, official documents and posted financial transactions require explicit version/reversal workflows. No hard delete for historical academic/financial records without compliance review.

## Reusable evidence

Maintain a test matrix with institution types, user roles and two-tenant fixtures. Record CI run links, approvals, demo evidence and unresolved policy decisions per milestone.

## Pilot target and evidence sheet

Before the pilot, the named roles fill in the target column with the pilot institution and record environment, dataset size, test date, measured value and reviewer. Targets are pending agreement. Keep units and measurement boundaries with the result.

| Measure | Target to agree | Evidence and pass condition | Accountable role |
| --- | --- | --- | --- |
| Peak morning submissions | Sessions per minute, sustained minutes, tenant count and roster size | Replay the institution's peak traffic mix against staging. Achieve the agreed rate with zero duplicate transitions, missing audit records or tenant leakage. | Attendance owner and pilot coordinator |
| Finalization latency and errors | p95 milliseconds and maximum unexpected error percentage under peak load | Measure ingress to committed HTTP response. Report successful writes, retries and expected conflicts separately. Compare measured percentile and error rate to both targets. | API owner |
| Recovery point (RPO) | Maximum minutes of accepted data loss | Restore into an isolated environment. Compare the last recovered committed marker with the simulated incident time. Observed loss must fit the target. | Database owner |
| Recovery time (RTO) | Maximum elapsed minutes to usable service | Time from declared outage through restore and verified tenant sign-in, attendance read and receipt reconciliation. Compare total duration with the target. | Operations owner |

Keep the signed target sheet, load-test output and restore rehearsal record with the release evidence. If a target is missed, record the observed value, remediation owner and repeat-test date.
