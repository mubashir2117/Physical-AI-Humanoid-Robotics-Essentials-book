import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'An Educational Book on Physical AI Using Qwen AI and Spec-Kit Plus',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 🔥 Your live website domain (GitHub Pages)
  url: 'https://mubashir2117.github.io',

  // 🔥 The folder name of the repo (must match)
  baseUrl: '/Physical-AI-Humanoid-Robotics-Essentials-book/',

  organizationName: 'mubashir2117', 
  projectName: 'Physical-AI-Humanoid-Robotics-Essentials-book',

  onBrokenLinks: 'throw',

  markdown: {
    format: 'detect',
    mermaid: false,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          lastVersion: 'current',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [],

  plugins: [],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },

    metadata: [
      { name: 'keywords', content: 'robotics, AI, physical AI, ROS, simulation, Isaac Sim, navigation, machine learning' },
      { name: 'author', content: 'Physical AI Educational Project' },
      { name: 'theme-color', content: '#0F172A' },
    ],

    navbar: {
      title: 'Physical AI',
      items: [
        { to: '/docs/', label: 'Book', position: 'left' },

        // 🔥 GitHub button fixed
        { 
          href: 'https://github.com/mubashir2117/Physical-AI-Humanoid-Robotics-Essentials-book', 
          label: 'GitHub', 
          position: 'right' 
        },

        // 🔥 Optional: Your LinkedIn
        { 
          href: 'https://www.linkedin.com/in/mubashir-javaid-175a6728b', 
          label: 'LinkedIn', 
          position: 'right' 
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Chapters',
          items: [
            {
              label: 'Module 1 - ROS 2',
              to: '/docs/module-1-ros2/chapter-1-intro-to-physical-ai',
            },
            {
              label: 'Module 2 - Digital Twin',
              to: '/docs/module-2-digital-twin/chapter-6-simulation-intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Spec-Kit Plus',
              href: 'https://github.com/spec-kit-plus',
            },
            {
              label: 'Robot Operating System',
              href: 'https://docs.ros.org/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/mubashir2117',
            },
            {
              label: 'Issues',
              href: 'https://github.com/mubashir2117',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/mubashir2117',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
