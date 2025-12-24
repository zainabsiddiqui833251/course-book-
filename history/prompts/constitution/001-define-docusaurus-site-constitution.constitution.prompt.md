---
id: 001
title: Define Docusaurus Site Constitution
stage: constitution
date: 2025-12-21
surface: agent
model: gemini
feature: none
branch: master
user: user
command: /sp.constitution Define the core constitution for a Docusaurus v3 site (classic template) on "Physical AI and Humanoid Robots – A 13-Week Course". Establish rules: Use Markdown for all content, structure docs/ with top-level pages and 6 module folders, ensure 4-5 chapters per module (total 27 chapters), integrate 13-week pacing, make sidebar collapsible, and redirect homepage to intro.
labels: ["constitution", "docusaurus", "setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
- .specify/templates/plan-template.md
tests:
- none
---

## Prompt

/sp.constitution Define the core constitution for a Docusaurus v3 site (classic template) on "Physical AI and Humanoid Robots – A 13-Week Course". Establish rules: Use Markdown for all content, structure docs/ with top-level pages and 6 module folders, ensure 4-5 chapters per module (total 27 chapters), integrate 13-week pacing, make sidebar collapsible, and redirect homepage to intro.

## Response snapshot

Constitution v1.0.0 has been created for "Physical AI and Humanoid Robots – A 13-Week Course".

This establishes the core principles for the Docusaurus v3 site, including content format, directory structure, navigation, and technology stack. The constitution is located at `.specify/memory/constitution.md`.

I have also updated the plan template to include constitution-specific checks.

Suggested commit message:
`docs: establish v1.0.0 of project constitution`

## Outcome

- ✅ Impact: Defined the initial project constitution, establishing core principles for a Docusaurus-based course website.
- 🧪 Tests: No tests were run.
- 📁 Files: Created and defined the constitution file, and updated the plan template to reflect the new principles.
- 🔁 Next prompts: Suggest `/sp.specify` to start building the feature specification.
- 🧠 Reflection: The process was smooth. Creating a constitution provides a solid foundation for the project.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): none
