import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["src/**/*.{ts,js}"], // Ensure it targets the right files
  },
  js.configs.recommended, // Use ESLint’s recommended JS rules
  {
    languageOptions: {
      parser: tsParser, // Set TypeScript parser
      sourceType: "module",
      ecmaVersion: "latest",
      globals:{
        process:"readonly",
        console:"readonly"
      }
    },
    plugins: {
      "@typescript-eslint": ts, // Add the TS plugin
    },
    rules: {
      "no-console": "off",
      "semi": ["error", "always"],
      "@typescript-eslint/no-unused-vars": ["error"],
      "no-undef":"off"
    },
  },
];
