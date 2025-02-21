/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docsSidebar: [
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'getting-started',
    },
    {
      type: 'doc',
      label: 'Example Project Walkthrough',
      id: 'next/guides/project-walkthrough',
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'doc',
          label: 'Previews',
          id: 'next/guides/post-page-previews',
        },
        {
          type: 'doc',
          label: 'Authentication',
          id: 'authentication',
        },
        {
          type: 'doc',
          label: 'Apollo',
          id: 'apollo',
        },
        {
          type: 'doc',
          label: 'Sitemaps',
          id: 'guides/sitemaps',
        },
        {
          type: 'doc',
          label: 'TypeScript',
          id: 'guides/typescript',
        },
        {
          type: 'doc',
          label: 'Customizing the Toolbar',
          id: 'guides/custom-toolbar',
        },
        {
          type: 'doc',
          label: 'Portfolio Migration',
          id: 'migrationPath/portfolio-migration',
        },
        {
          type: 'doc',
          label: 'Custom Post Types',
          id: 'guides/custom-post-types',
        },
        {
          type: 'doc',
          label: 'Plugins',
          id: 'guides/plugins',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'doc',
          label: 'Templates Overview',
          id: 'templates',
        },
        {
          type: 'doc',
          label: 'Seed Query',
          id: 'faustwp/seed-query',
        },
        {
          type: 'doc',
          label: 'Global Stylesheet',
          id: 'global-stylesheet',
        },
        {
          type: 'doc',
          label: 'API Router',
          id: 'next/reference/api-router',
        },
        {
          type: 'doc',
          label: 'getNextServerSideProps',
          id: 'next/reference/getNextServerSideProps',
        },
        {
          type: 'doc',
          label: 'getNextStaticProps',
          id: 'next/reference/getNextStaticProps',
        },
        {
          type: 'doc',
          label: 'WordPressBlocksViewer',
          id: 'reference/WordPressBlocksViewer',
        },
        {
          type: 'doc',
          label: 'WordPressBlocksProvider',
          id: 'reference/WordPressBlocksProvider',
        },
        {
          type: 'doc',
          label: 'useBlocksTheme',
          id: 'reference/useBlocksTheme',
        },
        {
          type: 'doc',
          label: 'getSitemapProps',
          id: 'reference/getSitemapProps',
        },
        {
          type: 'doc',
          label: 'getWordPressProps',
          id: 'reference/getWordPressProps',
        },
        {
          type: 'doc',
          label: 'useAuth',
          id: 'reference/useAuth',
        },
        {
          type: 'doc',
          label: 'useLogin',
          id: 'reference/useLogin',
        },
        {
          type: 'doc',
          label: 'useLogout',
          id: 'reference/useLogout',
        },
      ],
    },
    {
      type: 'category',
      label: 'Companion WordPress Plugin',
      items: [
        {
          type: 'doc',
          label: 'Settings Reference',
          id: 'faustwp/settings',
        },
        {
          type: 'doc',
          label: 'Filters',
          id: 'faustwp/filters',
        },
      ],
    },
    {
      type: 'category',
      label: 'Faust Plugin System',
      items: [
        {
          type: 'doc',
          label: 'Creating a Plugin',
          id: 'plugin-system/creating-a-plugin',
        },
        {
          type: 'doc',
          label: 'Filters',
          id: 'plugin-system/filters',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Telemetry',
      id: 'telemetry',
    },
    {
      type: 'category',
      label: 'Gutenberg Support',
      items: [
        {
          type: 'doc',
          label: 'Getting Started',
          id: 'gutenberg/getting-started',
        },
        {
          type: 'doc',
          label: 'How to Query Blocks',
          id: 'gutenberg/how-to-query-blocks',
        },
        {
          type: 'doc',
          label: 'Using wp-graphql-content-blocks plugin',
          id: 'gutenberg/wp-graphql-content-blocks',
        },
        {
          type: 'doc',
          label: 'Plugin filters',
          id: 'gutenberg/filters',
        },
        {
          type: 'doc',
          label: 'Migration from WPGraphQL Gutenberg',
          id: 'gutenberg/migration-from-wp-graphql-gutenberg',
        },
        {
          type: 'category',
          label: 'How to Create a Block',
          items: [
            {
              type: 'doc',
              label: 'Creating a Block from WordPress Core Blocks',
              id: 'gutenberg/tutorial/create-a-block-from-wordpress-core',
            },
            {
              type: 'doc',
              label: 'Creating a Block from a Third Party Plugin',
              id: 'gutenberg/tutorial/create-a-block-from-third-party',
            },
            {
              type: 'doc',
              label: 'Creating a Custom Block',
              id: 'gutenberg/tutorial/create-a-custom-block',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      label: 'Migration from Legacy Faust',
      id: 'migrationPath/overview',
    },
    {
      type: 'doc',
      label: 'Deploy Your Faust.js App',
      id: 'going-to-production/deployment',
    },
    {
      type: 'doc',
      label: 'Debugging',
      id: 'debugging',
    },
    {
      type: 'doc',
      label: 'FAQ',
      id: 'faq',
    },
  ],
};
