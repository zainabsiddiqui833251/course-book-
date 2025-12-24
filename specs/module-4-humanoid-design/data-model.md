# Data Model: Humanoid Design Module (Module 4)

**Date**: 2025-12-22
**Feature**: Humanoid Design Module (Module 4)
**Spec**: specs/module-4-humanoid-design/spec.md
**Plan**: specs/module-4-humanoid-design/plan.md

## Key Entities

This section details the key data entities involved in the Humanoid Design Module, focusing on concepts relevant to hardware-focused designs.

### Human Body Metrics

*   **Description**: Represents anthropometric data, biomechanical principles, and joint ranges of motion relevant to designing robotic systems that interact with or mimic human physiology.
*   **Attributes**:
    *   Anthropometric measurements (e.g., height, limb length, joint angles, weight distribution)
    *   Biomechanical constraints (e.g., force limits, range of motion limits)
    *   Movement patterns and dynamics

### Robotic Components

*   **Description**: Details physical components used in humanoid robots, including materials, actuators, and power systems.
*   **Attributes**:
    *   **Materials**: Type (e.g., PLA, Aluminum, Carbon Fiber), properties (e.g., tensile strength, density, cost), suppliers.
    *   **Actuators**: Type (e.g., Servo Motor, DC Motor, Stepper Motor), specifications (e.g., torque, speed, voltage, encoder type), manufacturers.
    *   **Power Systems**: Battery type (e.g., LiPo, NiMH), capacity (e.g., mAh, Wh), voltage, current draw, power distribution methods.
    *   **End-Effectors**: Robotic arms, hands (type, degrees of freedom, gripper mechanisms).

### Design Data

*   **Description**: Contains visual and quantitative data related to design specifications and component choices.
*   **Attributes**:
    *   CAD Screenshots: Visual representations of components or assemblies.
    *   Weight Specifications: Mass of individual components or assemblies.
    *   Cost Information: Unit cost of components or estimated assembly cost.
    *   Technical Drawings: (if applicable) Dimensions and specifications.
