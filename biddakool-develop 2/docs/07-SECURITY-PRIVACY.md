# Security & Privacy Requirements

## Principle

Biddakool stores children’s records, exam results, guardian relationships, employee data and payments. Apply privacy by design and least privilege from M1.

## Core controls

- Verified authentication, MFA for sensitive users, short-lived access credentials, secure refresh/rotation strategy.
- Role permission + relationship-based authorization; deny-by-default for student and medical data.
- Tenant isolation throughout API, EF, background jobs, analytics, exports, object storage and caches.
- Server-side input validation, CSRF controls for cookie auth, XSS-safe rendering, file scanning and upload type/size checks.
- Secret manager for providers, key rotation, HSTS/TLS and encrypted at-rest where applicable.
- Auditable changes to marks, fee receipts, permissions, official certificates and attendance corrections.
- Personal data retention and deletion procedures reviewed against laws/contracts for deployment countries.
- Do not store raw biometric face/fingerprint templates by default; consume vendor events and mapped IDs.

## Incident readiness

Security logging (redacted), alerting, tested restore, incident response contacts and least-privileged support access. Do not assert compliance certification until externally verified.
