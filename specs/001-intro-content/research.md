# Research: Structuring Intro Page Content

**Date**: 2025-12-21
**Feature**: [Intro Page Content](E:\speckit\course_book\specs\001-intro-content\spec.md)

## Summary

This research investigates best practices for structuring the `docs/intro.md` page in Docusaurus v3, focusing on incorporating specific content requirements such as a welcome message, course overview, learning outcomes, a 13-week schedule table, prerequisites, target audience, and estimated effort. It also confirms standard Markdown practices for these elements.

## Key Findings

### 1. Docusaurus Page Structure & Markdown

*   **`docs/` Directory**: Docusaurus uses the `docs/` directory for structured documentation content. The `docs/intro.md` file will reside here.
*   **Front Matter**: Essential for page metadata. For `docs/intro.md`, this includes `id: intro`, `title: "Introduction & Course Overview"`, and `sidebar_label: "Introduction"`. This allows Docusaurus to correctly identify and display the page.
*   **Markdown Headings**: Standard Markdown headings (`#`, `##`, `###`) are the Docusaurus-recommended way to structure content within a page for clarity and hierarchy. The requested structure (Welcome, Overview, Outcomes, Schedule, Prerequisites/Audience/Effort) will use these.
*   **Bullet Points**: Standard Markdown lists (`- `) are suitable for displaying learning outcomes.
*   **Markdown Tables**: Docusaurus fully supports standard Markdown tables for presenting structured data like the 13-week schedule.

### 2. Content Specifics

*   **Overview**: A section with a heading (e.g., `## Overview`) followed by a paragraph of approximately 250 words.
*   **Learning Outcomes**: A section with a heading (e.g., `## Learning Outcomes`) followed by a bulleted list containing at least 10 items.
*   **Schedule Table**: A section with a heading (e.g., `## Course Schedule`) containing a Markdown table mapping weeks to modules/chapters and effort.
*   **Prerequisites, Target Audience, Effort**: These will be grouped under a common heading (e.g., `## Prerequisites and Audience`) for conciseness, clearly listing the specified details.

## Decision

The `docs/intro.md` page will be structured using standard Markdown features within Docusaurus:
*   YAML front matter for `id`, `title`, and `sidebar_label`.
*   Markdown headings (`#`, `##`) for each required section: Welcome, Overview, Learning Outcomes, Course Schedule, Prerequisites and Audience.
*   Bulleted lists for learning outcomes.
*   A Markdown table for the 13-week schedule.
*   Clear text descriptions for prerequisites, target audience, and effort.

## Rationale

This approach leverages Docusaurus's native Markdown capabilities, ensuring straightforward content creation, rendering, and maintenance. It directly fulfills all content requirements specified in the feature description without introducing external dependencies or complex tooling.

## Alternatives Considered

*   **Using MDX**: MDX would allow embedding React components, but it is unnecessary for this static content structure. Standard Markdown is simpler and sufficient.
*   **Externalizing Schedule Data**: Storing the schedule in a separate JSON or YAML file and importing it would add complexity for a single-page schedule. Embedding it directly in Markdown is more efficient here.