# Research Findings: Course Assessments

**Feature**: Course Assessments
**Branch**: `001-course-assessments`
**Date**: 2025-12-21

## Research for Technical Context Unknowns

### Language/Version

*   **Decision**: Use Node.js LTS (e.g., v20.x) and the latest stable Docusaurus version (e.g., v3.x).
*   **Rationale**: Adhering to LTS versions ensures stability and community support. Docusaurus v3 is the current standard and aligns with the project's constitution.
*   **Alternatives considered**:
    *   Using the absolute latest Node.js version: Rejected due to potential instability and wider compatibility issues.
    *   Using older Docusaurus versions: Rejected as it contradicts the project constitution and would miss out on modern features and security updates.

### Testing (Markdown Linting)

*   **Decision**: Implement `remark-lint` with standard Docusaurus plugins (e.g., `remark-preset-docusaurus`) and integrate it into a pre-commit hook (e.g., using `husky`).
*   **Rationale**: `remark-lint` is well-suited for Docusaurus projects and its preset provides common markdown rules. A pre-commit hook ensures quality checks are performed before code is committed.
*   **Alternatives considered**:
    *   `markdownlint`: A viable alternative but `remark-lint` is more common in the Docusaurus ecosystem.
    *   Manual checks: Inefficient and error-prone for markdown quality.

### Project Type

*   **Decision**: Confirm the project type is primarily a **Documentation Site**.
*   **Rationale**: The presence of Docusaurus and the nature of the current feature (adding documentation) strongly suggest this. If other functionalities exist, they are not directly related to this plan.
*   **Alternatives considered**:
    *   Full-stack application: Rejected as there's no indication of backend/frontend code for user-facing features beyond documentation.
    *   CLI tool: Rejected as Docusaurus is a web-based documentation generator.

## Research for Documentation Structure and Navigation

### Structuring `docs/assessments.md`

*   **Decision**: Structure `docs/assessments.md` using a combination of a summary table at the top for quick reference (name, week, weight, type) and detailed markdown sections below for each assessment, containing instructions and rubrics.
*   **Rationale**: This approach directly addresses the user's request for "Section per assessment, plus overall grading summary." It offers a clear overview and allows for detailed content within each assessment's dedicated section. Markdown blocks are suitable for rich text instructions and rubrics.
*   **Alternatives considered**:
    *   A single large markdown table: Rejected as it would become unwieldy with detailed instructions and rubrics.
    *   Linking to separate markdown files for each assessment: Rejected as it fragments content and may complicate Docusaurus navigation.

### Markdown Linting and Validation Tools

*   **Decision**: Utilize `remark-lint` with `remark-preset-docusaurus` and potentially integrate with `eslint-plugin-markdown` for broader linting within the Docusaurus ecosystem.
*   **Rationale**: `remark-lint` is well-suited for Docusaurus projects and its preset provides common markdown rules. Integration with ESLint can provide a more unified linting experience if ESLint is already in use.
*   **Alternatives considered**:
    *   `markdownlint`: A viable alternative, but `remark-lint` is more common in the Docusaurus ecosystem.
    *   Manual checks: Inefficient and error-prone.

### Integrating `docs/assessments.md` into Docusaurus Navigation

*   **Decision**: Add `assessments.md` as a top-level markdown file within the `docs/` directory. Update `sidebars.js` to include an entry for `assessments.md` in the main sidebar navigation.
*   **Rationale**: This follows the Docusaurus v3 constitution's principle of organizing content within `docs/` and integrating new pages into the sidebar for discoverability.
*   **Alternatives considered**:
    *   Placing `assessments.md` within a module directory: Rejected as it is a top-level overview document.
    *   Not updating `sidebars.js`: Rejected as it would make the new page inaccessible through standard site navigation.
