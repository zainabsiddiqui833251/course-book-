import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a54'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ef7'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/actuators',
            component: ComponentCreator('/docs/tags/actuators', '2f9'),
            exact: true
          },
          {
            path: '/docs/tags/ai',
            component: ComponentCreator('/docs/tags/ai', 'bd3'),
            exact: true
          },
          {
            path: '/docs/tags/behavioral-cloning',
            component: ComponentCreator('/docs/tags/behavioral-cloning', '888'),
            exact: true
          },
          {
            path: '/docs/tags/demonstrations',
            component: ComponentCreator('/docs/tags/demonstrations', '7d8'),
            exact: true
          },
          {
            path: '/docs/tags/dh-parameters',
            component: ComponentCreator('/docs/tags/dh-parameters', 'dd6'),
            exact: true
          },
          {
            path: '/docs/tags/dof',
            component: ComponentCreator('/docs/tags/dof', '15d'),
            exact: true
          },
          {
            path: '/docs/tags/dynamics',
            component: ComponentCreator('/docs/tags/dynamics', '393'),
            exact: true
          },
          {
            path: '/docs/tags/embodied-ai',
            component: ComponentCreator('/docs/tags/embodied-ai', 'b98'),
            exact: true
          },
          {
            path: '/docs/tags/forward-kinematics',
            component: ComponentCreator('/docs/tags/forward-kinematics', 'aa4'),
            exact: true
          },
          {
            path: '/docs/tags/frames',
            component: ComponentCreator('/docs/tags/frames', '17b'),
            exact: true
          },
          {
            path: '/docs/tags/imitation-learning',
            component: ComponentCreator('/docs/tags/imitation-learning', 'da3'),
            exact: true
          },
          {
            path: '/docs/tags/inverse-kinematics',
            component: ComponentCreator('/docs/tags/inverse-kinematics', '050'),
            exact: true
          },
          {
            path: '/docs/tags/isaac-gym',
            component: ComponentCreator('/docs/tags/isaac-gym', '4b7'),
            exact: true
          },
          {
            path: '/docs/tags/joints',
            component: ComponentCreator('/docs/tags/joints', '2e6'),
            exact: true
          },
          {
            path: '/docs/tags/kinematics',
            component: ComponentCreator('/docs/tags/kinematics', '3dd'),
            exact: true
          },
          {
            path: '/docs/tags/llm',
            component: ComponentCreator('/docs/tags/llm', 'cef'),
            exact: true
          },
          {
            path: '/docs/tags/motors',
            component: ComponentCreator('/docs/tags/motors', '023'),
            exact: true
          },
          {
            path: '/docs/tags/mu-jo-co',
            component: ComponentCreator('/docs/tags/mu-jo-co', '52a'),
            exact: true
          },
          {
            path: '/docs/tags/physical-systems',
            component: ComponentCreator('/docs/tags/physical-systems', '515'),
            exact: true
          },
          {
            path: '/docs/tags/planning',
            component: ComponentCreator('/docs/tags/planning', '904'),
            exact: true
          },
          {
            path: '/docs/tags/rl',
            component: ComponentCreator('/docs/tags/rl', '0af'),
            exact: true
          },
          {
            path: '/docs/tags/robotics',
            component: ComponentCreator('/docs/tags/robotics', '40e'),
            exact: true
          },
          {
            path: '/docs/tags/simulation',
            component: ComponentCreator('/docs/tags/simulation', '7b7'),
            exact: true
          },
          {
            path: '/docs/tags/torque',
            component: ComponentCreator('/docs/tags/torque', '3d4'),
            exact: true
          },
          {
            path: '/docs/tags/training',
            component: ComponentCreator('/docs/tags/training', '98c'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '32e'),
            routes: [
              {
                path: '/docs/assessments',
                component: ComponentCreator('/docs/assessments', '8b0'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/glossary',
                component: ComponentCreator('/docs/glossary', 'c43'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/hardware-requirements',
                component: ComponentCreator('/docs/hardware-requirements', '6c4'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'f7a'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-1-foundations/chapter-1',
                component: ComponentCreator('/docs/module-1-foundations/chapter-1', 'dd6'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-1-foundations/chapter-2',
                component: ComponentCreator('/docs/module-1-foundations/chapter-2', '46c'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-1-foundations/chapter-3',
                component: ComponentCreator('/docs/module-1-foundations/chapter-3', 'aa7'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-1-foundations/chapter-4',
                component: ComponentCreator('/docs/module-1-foundations/chapter-4', '8ea'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-1-foundations/chapter-5',
                component: ComponentCreator('/docs/module-1-foundations/chapter-5', '1fb'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-2-robotics-basics/chapter-1-dof-joint-types',
                component: ComponentCreator('/docs/module-2-robotics-basics/chapter-1-dof-joint-types', 'f86'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-2-robotics-basics/chapter-2-kinematics',
                component: ComponentCreator('/docs/module-2-robotics-basics/chapter-2-kinematics', 'a8a'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-2-robotics-basics/chapter-3-dynamics-torque',
                component: ComponentCreator('/docs/module-2-robotics-basics/chapter-3-dynamics-torque', '964'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-2-robotics-basics/chapter-4',
                component: ComponentCreator('/docs/module-2-robotics-basics/chapter-4', 'e34'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-3-ai-integration/chapter-1-rl-physical-worlds',
                component: ComponentCreator('/docs/module-3-ai-integration/chapter-1-rl-physical-worlds', '999'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-3-ai-integration/chapter-2-kinematics',
                component: ComponentCreator('/docs/module-3-ai-integration/chapter-2-kinematics', '963'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-3-ai-integration/chapter-3-imitation-learning',
                component: ComponentCreator('/docs/module-3-ai-integration/chapter-3-imitation-learning', '009'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-3-ai-integration/chapter-4-llm-robot-brains',
                component: ComponentCreator('/docs/module-3-ai-integration/chapter-4-llm-robot-brains', '532'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-3-ai-integration/chapter-5-training-envs',
                component: ComponentCreator('/docs/module-3-ai-integration/chapter-5-training-envs', '1cd'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-4-humanoid-design/chapter-1',
                component: ComponentCreator('/docs/module-4-humanoid-design/chapter-1', '3d1'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-4-humanoid-design/chapter-2',
                component: ComponentCreator('/docs/module-4-humanoid-design/chapter-2', 'fef'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-4-humanoid-design/chapter-3',
                component: ComponentCreator('/docs/module-4-humanoid-design/chapter-3', 'f8e'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-4-humanoid-design/chapter-4',
                component: ComponentCreator('/docs/module-4-humanoid-design/chapter-4', '713'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-5-control-navigation/',
                component: ComponentCreator('/docs/module-5-control-navigation/', 'd84'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-5-control-navigation/chapter-1',
                component: ComponentCreator('/docs/module-5-control-navigation/chapter-1', 'ad9'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-5-control-navigation/chapter-2',
                component: ComponentCreator('/docs/module-5-control-navigation/chapter-2', 'f2e'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-5-control-navigation/chapter-3',
                component: ComponentCreator('/docs/module-5-control-navigation/chapter-3', '187'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-5-control-navigation/chapter-4',
                component: ComponentCreator('/docs/module-5-control-navigation/chapter-4', '6aa'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-5-control-navigation/chapter-5',
                component: ComponentCreator('/docs/module-5-control-navigation/chapter-5', '80f'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-6-applications-ethics/economic-impact',
                component: ComponentCreator('/docs/module-6-applications-ethics/economic-impact', '937'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-6-applications-ethics/ethical-frameworks',
                component: ComponentCreator('/docs/module-6-applications-ethics/ethical-frameworks', '915'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-6-applications-ethics/humanoid-robots-comparison',
                component: ComponentCreator('/docs/module-6-applications-ethics/humanoid-robots-comparison', '808'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-6-applications-ethics/real-deployments',
                component: ComponentCreator('/docs/module-6-applications-ethics/real-deployments', '418'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/module-6-applications-ethics/safety-standards',
                component: ComponentCreator('/docs/module-6-applications-ethics/safety-standards', 'efb'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/docs/topic-overview',
                component: ComponentCreator('/docs/topic-overview', '20f'),
                exact: true,
                sidebar: "courseSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
