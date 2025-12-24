# Data Model: Hardware Requirements

This data model outlines the structure for representing hardware and software requirements for different course tiers.

## Entities

### HardwareRequirement

Represents the hardware, software, and cost requirements for a specific course tier.

*   **tierName**: String (e.g., "Simulation", "Small Robot", "Full Build")
*   **hardware**: List of Strings (e.g., ["Raspberry Pi", "Servos", "3D Printer"])
*   **software**: List of Strings (e.g., ["Ubuntu", "ROS 2", "Isaac Sim"])
*   **costsPKR**: String (e.g., "Approx. ₹XX,XXX - ₹YY,YYY")
*   **costsUSD**: String (e.g., "Approx. $XXX - $YYY")

## Relationships

*   A **HardwareRequirement** record is defined for each defined tier of the course.

## Validation Rules

*   `tierName` must be one of: "Simulation", "Small Robot", "Full Build".
*   `costsPKR` and `costsUSD` should ideally represent estimated ranges.
