# Tasks: Course Assessments

**Feature**: Course Assessments
**Branch**: `001-course-assessments`
**Specification**: `specs/001-course-assessments/spec.md`
**Implementation Plan**: `specs/001-course-assessments/plan.md`
**Created**: 2025-12-21

## Overview

This document outlines the tasks required to implement the "Course Assessments" feature, organizing them by user story and phase for independent implementation and testing.

## Dependencies

This plan assumes the successful completion of Phase 1 and Phase 2 before starting User Story phases.

## Phase 1: Setup

*   **Goal**: Initialize the project environment and set up core tooling for documentation quality.

- [ ] T001 Setup pre-commit hook for markdown linting in `.githooks/pre-commit`.
- [ ] T002 Configure markdown linter (`remark-lint` with `remark-preset-docusaurus`) in `.remarkrc.js`.

## Phase 2: Foundational

*   **Goal**: Establish the basic structure for the assessments documentation page.

- [ ] T003 Add `assessments.md` as a top-level markdown file in `docs/`.
- [ ] T004 Update `sidebars.js` to include `assessments.md` in the main sidebar navigation.
- [ ] T005 Create initial structure for `docs/assessments.md` including a summary table placeholder and sections for each assessment (Quiz 1, Mid-term Project, Design Challenge, Final Exam) based on research findings.

## Phase 3: User Story 1 - Student views assessments overview (P1)

*   **Goal**: Allow students to view a comprehensive overview of all course assessments.
*   **Independent Test**: Verify `docs/assessments.md` displays all assessments with basic details and navigates correctly.

- [ ] T006 [US1] Populate `docs/assessments.md` with the names, week numbers, weightings, and types for all four assessments (Quiz 1, Mid-term Project, Design Challenge, Final Exam).
- [ ] T007 [US1] Add placeholder text for detailed assessment instructions for each assessment in `docs/assessments.md`.
- [ ] T008 [US1] Add placeholder text for rubrics for each assessment in `docs/assessments.md`.
- [ ] T009 [US1] Populate the summary table in `docs/assessments.md` with assessment name, week, weight, and type for quick reference.

## Phase 4: User Story 2 - Instructor reviews assessment details (P2)

*   **Goal**: Enable instructors to review detailed assessment specifications, including instructions and rubrics.
*   **Independent Test**: Verify that detailed instructions and rubric tables are present and properly formatted for each assessment in `docs/assessments.md`.

- [ ] T010 [US2] Elaborate on the assessment instructions for each exam (Quiz 1, Mid-term Project, Design Challenge, Final Exam) in `docs/assessments.md`, incorporating submission notes where applicable.
- [ ] T011 [US2] Create and populate rubric tables for each assessment in `docs/assessments.md` based on the feature description.

## Phase 5: Polish & Cross-Cutting Concerns

*   **Goal**: Ensure the final documentation is clean, consistent, and meets quality standards.

- [ ] T012 Review `docs/assessments.md` for clarity, consistency, and adherence to markdown standards.
- [ ] T013 Verify that `assessments.md` is correctly rendered and navigable in the Docusaurus site.
- [ ] T014 Run markdown linter (`remark-lint`) and fix any identified issues.

---

## Task Summary

*   **Total Tasks**: 14
*   **Tasks per User Story**:
    *   US1 (Student views assessments overview): 4 tasks (T006-T009)
    *   US2 (Instructor reviews assessment details): 2 tasks (T010-T011)
*   **Parallel Opportunities**: Tasks within Phase 3 and Phase 4 modify different parts of `docs/assessments.md` and can be considered for parallel execution if development capacity allows, although sequential completion within the story is recommended for clarity. T006, T007, T008, T009 and T010, T011 can be run in parallel if development on different assessments occurs concurrently.
*   **Independent Test Criteria per Story**:
    *   US1: Verified by checking `docs/assessments.md` for all assessments, basic details, placeholders, and summary table, plus navigation.
    *   US2: Verified by checking detailed instructions and rubric tables are present and correctly formatted for each assessment.
*   **Suggested MVP Scope**: Phase 1, Phase 2, and User Story 1 (Tasks T001-T009).
