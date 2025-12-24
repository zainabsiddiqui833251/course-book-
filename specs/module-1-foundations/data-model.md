# Data Model: Sidebar Configuration

**Date**: 2025-12-21
**Feature**: Module 1 Foundations Documentation
**Spec**: specs/module-1-foundations/spec.md

## Summary

This document describes the data structure for the `sidebars.js` file, which governs the navigation for the course content. This configuration is essential for organizing and presenting the Module 1 documentation within the Docusaurus site.

## Sidebar Object: `courseSidebar`

The primary data structure is a JavaScript array, exported from `sidebars.js`, representing the course sidebar.

-   **Type**: `Array`
-   **Description**: An ordered list of sidebar items.

### Sidebar Item Types

The array contains a mix of `string` and `object` elements.

#### 1. Document Link (String)

A direct link to a document. The string is the document's ID (the filename without the extension, relative to the `docs` root).

-   **Type**: `string`
-   **Example**: `'module-1-foundations/chapter-1'`
-   **Usage**: Represents a top-level page or a chapter within a module.

#### 2. Category (Object)

A collapsible group of documents, representing a course module.

-   **Type**: `Object`
-   **Properties**:
    -   `type` (string, required): Must be `'category'`.
    -   `label` (string, required): The display text for the category in the sidebar (e.g., `'Module 1: Foundations'`).
    -   `items` (Array, required): An array of sidebar items (document links or nested categories) contained within the category.

-   **Example**:
    ```javascript
    {
      type: 'category',
      label: 'Module 1: Foundations',
      items: [
        'module-1-foundations/chapter-1',
        'module-1-foundations/chapter-2',
        // ... other chapters
      ],
    }
    ```

## Full `sidebars.js` Structure (Module 1 Example)

The `sidebars.js` file will export an object. For Module 1, the structure will look like this:

```javascript
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  courseSidebar: [
    // --- Top-level documents ---
    'intro',
    'topic-overview',
    'hardware-requirements',
    'assessments',
    'glossary',

    // --- Module Categories ---
    {
      type: 'category',
      label: 'Module 1: Foundations',
      items: [
        'module-1-foundations/chapter-1',
        'module-1-foundations/chapter-2',
        'module-1-foundations/chapter-3',
        'module-1-foundations/chapter-4',
        'module-1-foundations/chapter-5',
      ],
    },
    // ... other modules (Module 2 to Module 6) will be added here
  ],
};

module.exports = sidebars;
```
