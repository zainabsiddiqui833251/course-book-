/**
 * @file Docusaurus sidebar configuration file.
 * @desc Defines the structure and order of navigation items in the sidebar for the course.
 */

// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
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
      label: 'Module 1: Foundations of Physical AI',
      items: [
        'module-1-foundations/chapter-1',
        'module-1-foundations/chapter-2',
        'module-1-foundations/chapter-3',
        'module-1-foundations/chapter-4',
        'module-1-foundations/chapter-5',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Robotics Basics & Kinematics',
      items: [
        'module-2-robotics-basics/chapter-1-dof-joint-types',
        'module-2-robotics-basics/chapter-2-kinematics',
        'module-2-robotics-basics/chapter-3-dynamics-torque',
        'module-2-robotics-basics/chapter-4',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: AI Integration & Embodied Learning',
      items: [
        'module-3-ai-integration/chapter-1-rl-physical-worlds',
        'module-3-ai-integration/chapter-2-kinematics',
        'module-3-ai-integration/chapter-3-imitation-learning',
        'module-3-ai-integration/chapter-4-llm-robot-brains',
        'module-3-ai-integration/chapter-5-training-envs',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Humanoid Design',
      items: [
        'module-4-humanoid-design/chapter-1',
        'module-4-humanoid-design/chapter-2',
        'module-4-humanoid-design/chapter-3',
        'module-4-humanoid-design/chapter-4',
      ],
    },
    {
      type: 'category',
      label: 'Module 5: Control & Navigation',
      items: [
        'module-5-control-navigation/module-5-control-navigation',
        'module-5-control-navigation/chapter-1',
        'module-5-control-navigation/chapter-2',
        'module-5-control-navigation/chapter-3',
        'module-5-control-navigation/chapter-4',
        'module-5-control-navigation/chapter-5', // Added placeholder item
      ],
    },
    {
      type: 'category',
      label: 'Module 6: Applications & Ethics',
      items: [
        'module-6-applications-ethics/humanoid-robots-comparison',
        'module-6-applications-ethics/real-deployments',
        'module-6-applications-ethics/economic-impact',
        'module-6-applications-ethics/ethical-frameworks',
        'module-6-applications-ethics/safety-standards',
      ],
    },
  ],
};

module.exports = sidebars;