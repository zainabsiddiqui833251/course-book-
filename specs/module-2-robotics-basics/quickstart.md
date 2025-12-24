# Quickstart Guide: Module 2 Robotics Basics & Kinematics

**Date**: 2025-12-21
**Feature**: Module 2 Robotics Basics & Kinematics Documentation
**Spec**: specs/module-2-robotics-basics/spec.md

## Overview

This guide provides quickstart instructions for navigating and utilizing the Module 2 documentation. It covers accessing chapter content, understanding the structure, and how to engage with the provided code examples and practice questions.

## Prerequisites

-   Access to the Docusaurus site (running locally via `npm run start` or via deployed URL).
-   A Python 3.x environment for running code examples.
-   A ROS 2 environment sourced (if running ROS 2 snippets locally).

## Steps to Get Started

### 1. Access Module 2 Content

Navigate to the "Module 2: Robotics Basics & Kinematics" section in the Docusaurus site's main sidebar.

**Action**: Click on the "Module 2: Robotics Basics & Kinematics" category to expand it, revealing the four chapter titles. Click on any chapter title to view its content.

### 2. Understand Chapter Structure and Frontmatter

Each chapter's Markdown file (`.md`) begins with frontmatter, providing essential metadata:
*   `id`: Unique identifier for the page.
*   `title`: The main title displayed at the top of the page.
*   `sidebar_label`: Text shown in the sidebar navigation.
*   `week`: Indicates the week range for the chapter (e.g., "Weeks 3–5").

### 3. Engage with Content Elements

*   **Text Content**: Chapters are designed to be between 1000–1500 words, explaining core concepts.
*   **Diagrams**: Embedded Mermaid diagrams illustrate concepts visually.
*   **Code Examples**: Python scripts and ROS 2 snippets are included to demonstrate practical applications. Instructions for running these are provided within the relevant sections.
*   **Practice Questions**: A set of 4–6 questions are provided at the end of each chapter for self-assessment.

### 4. Running Code Examples

**Python Examples**:
1.  Locate the Python code block within a chapter.
2.  Save the code to a `.py` file (e.g., `kinematics_solver.py`).
3.  Run from your terminal: `python your_script_name.py`

**ROS 2 Snippets**:
1.  Ensure your ROS 2 environment is sourced.
2.  Follow specific instructions within the chapter for running ROS 2 nodes, launch files, or commands. This may involve setting up a workspace or sourcing specific packages.

### 5. Verifying Diagrams

Mermaid diagrams are embedded directly in Markdown. They should render automatically in the Docusaurus site. If a diagram fails to render, check the Mermaid syntax for errors.