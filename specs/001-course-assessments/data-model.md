# Data Model: Course Assessments

This data model outlines the structure for representing course assessments, derived from the feature specification.

## Entities

### Assessment

Represents a graded component of the course.

*   **Attributes**:
    *   `name`: String (e.g., "Quiz 1", "Mid-term Project")
    *   `week`: Integer (e.g., 4, 7)
    *   `weight`: Percentage (e.g., 20%, 25%)
    *   `type`: String (e.g., "simulation", "CAD", "comprehensive")
    *   `instructions`: Text/Markdown (Detailed description of requirements)
    *   `rubric`: Text/Markdown (Grading criteria and expectations)

### Course

Represents the overall academic program. This entity is implicitly involved as it contains the assessments.

*   **Attributes**:
    *   `title`: String (e.g., "Physical AI and Humanoid Robots")
    *   `modules`: List of Module objects (not detailed here)
    *   `assessments`: List of Assessment objects

## Relationships

*   A **Course** can have multiple **Assessments**.
*   Each **Assessment** belongs to a specific **Course**.
