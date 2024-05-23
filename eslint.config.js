import antfu from '@antfu/eslint-config'

export default antfu(
  /* onfigures for antfu's config */
  {
    javascript: {
      overrides: {
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        'unused-imports/no-unused-imports': 'warn',
        'no-unused-vars': 'warn',
      },
    },
    ignores: [
      'node_modules/',
      'dist/',
      '.output/',
      '.nuxt/',
      '.storybook/',
      'storybook-static',
      '.github/',
      'coverage',
      '*.log',
      'nuxt.d.ts',
      '.DS_Store',
      '.vscode/',
      '*.md',
      'netlify.toml',
      'README.md',
      'package.json',
      'package-lock.json',
      'babel.config.js',
      '*.toml',
      'graphql',
      'types.ts',
      'generated',
      'components.d.ts',
      'icons.d.ts',
      'auto.d.ts',
      'src-tauri',
      'auto-imports.d.ts',
      'components.d.ts',
    ],
  },
  /* From the second arguments they are ESLint Flat Configs */
  {
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'node/prefer-global/process': 'off',
    },
  },
)
