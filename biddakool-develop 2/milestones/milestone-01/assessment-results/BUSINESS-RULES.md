# Examinations, Grades & Results — Business Rules

**Module:** `assessment-results`  |  **Requirement namespace:** `M1-ASSESSMENT_RESULTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-ASSESSMENT_RESULTS-BR-001: Only authorized teachers can enter marks for their assigned course offerings.
2. M1-ASSESSMENT_RESULTS-BR-002: Published results are immutable except through approved revision/version workflow.
3. M1-ASSESSMENT_RESULTS-BR-003: Pass criteria, GPA calculation and rounding must be policy-versioned per program.
4. M1-ASSESSMENT_RESULTS-BR-004: Marks outside configured assessment bounds are rejected; missing is not the same as zero.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.

## Worked publication and correction

Publish a student's approved marks using policy P1 and preserve the snapshot, input marks, policy version, approval evidence and issued document reference. A later change to P2 leaves that issuance reproducible. A correction starts a revision linked to the original, records its reason, requires the applicable approval and creates a new immutable issuance. A duplicate publish request returns the same issuance. Competing revisions check the expected version. Verify authorized historical lookup and that the latest view identifies the current revision. The institution must approve recalculation policy and who can authorize revisions.
