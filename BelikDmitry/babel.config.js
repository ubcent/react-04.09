const presets = [
  "@babel/env", "@babel/react"
];
const plugins = [
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-class-properties'
]

module.exports = { presets, plugins };