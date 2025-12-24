---
ID: "002"
TITLE: "Amend Constitution Module 1 Structure"
STAGE: "constitution"
DATE_ISO: "2025-12-21"
SURFACE: "agent"
MODEL: "gemini-pro"
FEATURE: "none"
BRANCH: "main"
USER: "user"
COMMAND: "/sp.constitution Constitute Module 1: Foundations of Physical AI as the first module covering Weeks 1–3 with exactly 5 chapters."
LABELS: ["constitution", "module-1", "structure-update"]
LINKS:
  SPEC/TICKET/ADR/PR: "null"
FILES_YAML:
  - ".specify/memory/constitution.md"
TESTS_YAML: []
---

PROMPT_TEXT: |
  /sp.constitution Constitute Module 1: Foundations of Physical AI as the first module covering Weeks 1–3 with exactly 5 chapters.

RESPONSE_TEXT: |
  <!--
  Sync Impact Report:

  Version change: 1.5.0 -> 1.5.1 (PATCH)

  Principles Modified:
  - II. Content Structure (Updated with specific details for Module 1: 'Foundations of Physical AI', 5 chapters, Weeks 1-3)

  Added Sections:
  - None

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
  The content MUST be organized within the `docs/` directory. This directory MUST contain top-level documentation pages, including `topic-overview.md` for general subject explanations, `assessments.md` for detailing evaluation criteria and exam structures, and other overview pages as needed. These top-level pages MUST provide a clear explanation of their respective subject matter. The `docs/` directory MUST contain six subdirectories, one for each course module (`docs/module-1` through `docs/module-6`). Module 1, titled 'Foundations of Physical AI', MUST comprise exactly **5 chapters** and be covered over **Weeks 1–3**. The remaining modules MUST follow a structure of 4-5 chapters each, ensuring a total of approximately 27 chapters paced over 13 weeks.

  ### III. Site Experience and Navigation
  The website MUST provide an optimal learning experience. The main sidebar MUST be collapsible to maximize content visibility. The homepage (root URL, `/`) MUST redirect to the primary course introduction page, which is `docs/intro.md`. This entry point page MUST clearly present the course overview, learning outcomes, and the 13-week schedule.

  ### IV. Technology Stack
  The project MUST be built using Docusaurus v3 with the "classic" preset. This ensures consistency and leverages a modern, documentation-focused framework.

  ### V. Hardware and System Requirements
  Clear documentation of hardware and system requirements necessary for students to effectively participate in the course (e.g., for running simulations, using CAD software, or engaging with lab materials) MUST be made accessible.

  ## Governance
  These principles are the authoritative source of truth for the project's structure and standards. All development, content creation, and configuration changes MUST adhere to this constitution. Amendments require a documented proposal, review, and an update to the version number.

  **Version**: 1.5.1 | **Ratified**: 2025-12-21 | **Last Amended**: 2025-12-21