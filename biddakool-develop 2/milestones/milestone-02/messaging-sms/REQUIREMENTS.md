# In-App Messaging, SMS & Notifications — Functional Requirements

**Module:** `messaging-sms`  |  **Requirement namespace:** `M2-MESSAGING_SMS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 15, 35, 44** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-MESSAGING_SMS-FR-001 | Guardian/teacher in-app threads and message notifications | P2 | PDF p. 10, 15, 35, 44 / Biddakool extension |
| M2-MESSAGING_SMS-FR-002 | SMS templates with placeholders and preview | P2 | PDF p. 10, 15, 35, 44 / Biddakool extension |
| M2-MESSAGING_SMS-FR-003 | Unicode, masking/non-masking and provider-specific delivery settings | P2 | PDF p. 10, 15, 35, 44 / Biddakool extension |
| M2-MESSAGING_SMS-FR-004 | Bulk recipient selection from student, teacher and manual phone groups | P2 | PDF p. 10, 15, 35, 44 / Biddakool extension |
| M2-MESSAGING_SMS-FR-005 | Saved recipient groups and duplicate recipient suppression | P2 | PDF p. 10, 15, 35, 44 / Biddakool extension |
| M2-MESSAGING_SMS-FR-006 | Automated attendance, due, payment, result and greeting alerts | P2 | PDF p. 10, 15, 35, 44 / Biddakool extension |
| M2-MESSAGING_SMS-FR-007 | SMS delivery reports and failed-message retry policies | P2 | PDF p. 10, 15, 35, 44 / Biddakool extension |
| M2-MESSAGING_SMS-FR-008 | Notification preferences and push/email provider abstraction | P2 | PDF p. 10, 15, 35, 44 / Biddakool extension |

## Actors / use cases

- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
- **Teacher** — may perform only operations granted by institution permissions and module policy.
- **Guardian** — may perform only operations granted by institution permissions and module policy.
- **Student** — may perform only operations granted by institution permissions and module policy.
- **Staff** — may perform only operations granted by institution permissions and module policy.

## Workflow baseline

1. Resolve the signed-in identity, institution membership, tenant scope and permission.
2. Read reference data owned by prerequisite modules through documented application interfaces.
3. Validate the request against institution policy, effective dates and domain invariants.
4. Execute one command transaction; write outbox event and audit record when appropriate.
5. Present status, validation errors and an accessible confirmation in the Next.js feature UI.
6. Serve tenant-filtered lists, detail pages and authorized exports.

## Non-functional requirements

- Tenant isolation on all reads and writes (including exports, background jobs and reporting).
- Server-side validation and policy-based authorization; UI guards are presentation only.
- Clear UTC timestamps, tenant-local date display and pagination for lists.
- Audit state transitions, protect personally identifiable information, and use structured logs.
- Keyboard-accessible responsive Next.js UI; accessible Bangla/English labels where available.

## Out of scope

- Features exclusively assigned to another milestone/module are not to be duplicated here.
- Business rules and external provider choices not expressly supported by the brochure must be reviewed with product owner before implementation.

## Open business decisions

- Confirm institution-specific exceptions, approval levels, retention and legal requirements.
- Confirm exact user-facing terminology for school, university, medical and madrasa modes.
