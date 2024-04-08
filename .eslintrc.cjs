module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    "cypress/global": true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "cypress"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "standard"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "comma-dangle": ["error", "always-multiline"],
    semi: ["error", "always"],
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
