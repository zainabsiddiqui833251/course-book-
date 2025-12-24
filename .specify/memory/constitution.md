<!--
Sync Impact Report:

Version change: 1.6.0 -> 1.7.0 (MINOR)

Principles Modified:
- II. Content Structure (Added details for Module 4: 'Humanoid Mechanical Design', 4 chapters, Weeks 8-9)

Added Sections:
- Details for Module 4 within Principle II.

Templates Requiring Updates:
- .specify/templates/plan-template.md (⚠ pending)
- .specify/templates/spec-template.md (⚠ pending)
- .specify/templates/tasks-template.md (⚠ pending)
- README.md / docs/quickstart.md (⚠ pending)

Follow-up TODOs: None
-->
# Physical AI and Humanoid Robots – A 13-Week Course Constitution

## Core Principles

### I. Content Format
All course content, including lectures, notes, and assignments, MUST be authored in Markdown (`.md` or `.mdx`). This ensures portability, version control friendliness, and separation of content from presentation.

### II. Content Structure
The content MUST be organized within the `docs/` directory. This directory MUST contain top-level documentation pages, including `topic-overview.md` for general subject explanations, `assessments.md` for detailing evaluation criteria and exam structures, and other overview pages as needed. These top-level pages MUST provide a clear explanation of their respective subject matter. The `docs/` directory MUST contain six subdirectories, one for each course module (`docs/module-1` through `docs/module-6`).
- Module 1: 'Foundations of Physical AI' MUST comprise exactly **5 chapters** and be covered over **Weeks 1–3**.
- Module 2: 'Robotics Basics & Kinematics' MUST comprise **4 chapters** and be covered over **Weeks 3–5**.
- Module 4: 'Humanoid Mechanical Design' MUST comprise **4 chapters** and be covered over **Weeks 8–9**.
The remaining modules MUST follow a structure of 4-5 chapters each, ensuring a total of approximately **27 chapters** paced over 13 weeks.

### III. Site Experience and Navigation
The website MUST provide an optimal learning experience. The main sidebar MUST be collapsible to maximize content visibility. The homepage (root URL, `/`) MUST redirect to the primary course introduction page, which is `docs/intro.md`. This entry point page MUST clearly present the course overview, learning outcomes, and the 13-week schedule.

### IV. Hardware and System Requirements
Clear documentation of hardware and system requirements necessary for students to participate in the course (e.g., for running simulations, using CAD software, or engaging with lab materials) MUST be made accessible.

## Governance
These principles are the authoritative source of truth for the project's structure and standards. All development, content creation, and configuration changes MUST adhere to this constitution. Amendments require a documented proposal, review, and an update to the version number.

**Version**: 1.7.0 | **Ratified**: 2025-12-21 | **Last Amended**: 2025-12-22