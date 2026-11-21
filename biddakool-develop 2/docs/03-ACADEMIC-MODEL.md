# Academic Model for Schools, Colleges, Universities, Medical & Madrasas

## Why one fixed "ClassId" column is insufficient

School: class → section → subjects → academic year. University: faculty/department → program → term → registered course offerings with credits. Medical: batch → rotations/wards → sessions and item/card/term/professional assessments. Madrasa: program/class plus optional Hifz group and assessment. Use a shared academic kernel with optional specialized extensions.

## Core vocabulary

- **AcademicYear / Term:** time structure with effective boundaries and policy version.
- **Department / Program:** organizational and credential structure.
- **Course:** persistent teaching subject with code and optional credit units.
- **CourseOffering:** course delivered in a term with teachers, times and participating group.
- **ProgramEnrollment:** student admitted to an academic program/cohort.
- **ClassPlacement:** school-style class/section/roll for a given term (optional when university-like).
- **CourseEnrollment:** registered student in an offered course for term; supports cross-section students.
- **AssessmentPolicy:** program/course/exam-specific grading and weighting rules (versioned).

## Examples (illustrative)

School student: `Program=General Secondary`, `Year=2027`, `Level=Class 8`, `Section=A`, `CourseOffering=Math Class8-A`.

University student: `Program=BSc in CSE`, `Term=Fall 2027`, `CourseOffering=CSE 220/Section-2`, `Credit=3`.

Medical student: `Program=MBBS`, `Batch=2027`, `Term=Phase`, `CourseOffering=Anatomy`, `ClinicalRotation=Surgery Ward`, with specialty-specific attendance and eligibility policy later.

## Mandatory invariants

- ClassPlacement is not equivalent to CourseEnrollment; preserve both where needed.
- Student remains the same identity across terms, program changes, promotions and readmissions.
- Results reference concrete offering + policy version, not just course name.
- Academic history, approved grades and paid fees cannot be rewritten by updating a present-day class assignment.
- Course credits, optional subject and pass policies are configurable per institution/program.

## Future-proofing requirements

M1 supplies the shared academic model, enrollment and simple result engine. M3 MedicalEducation/Hifz modules extend this model without cloning Students or Results.
