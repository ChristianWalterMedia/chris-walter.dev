// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      formatters: true,
    },
    {
      name: 'chriswalter:overrides',
      rules: {
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'antfu/top-level-function': 'off',
        'curly': 'off',
      },
    },
  ),
)
