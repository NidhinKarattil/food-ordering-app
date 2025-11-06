import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: [
      "**/dist/**",
      "**/build/**",
      "**/node_modules/**",
      "**/.parcel-cache/**",
      "**/coverage/**",
      "**/*.min.js",
      "**/bundle*.js",
      "eslint.config.*",
    ],
  },
  js.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // Browser globals
        console: "readonly",
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        FormData: "readonly",
        Headers: "readonly",
        Request: "readonly",
        Response: "readonly",
        AbortController: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",

        // React/TypeScript types
        React: "readonly",
        HTMLInputElement: "readonly",
        HTMLElement: "readonly",
        Event: "readonly",

        // Parcel HMR globals
        $RefreshReg$: "readonly",
        $RefreshSig$: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...tseslint.configs.recommended?.rules,
      ...prettierConfig.rules, // Prettier config to disable conflicting rules
      "react/react-in-jsx-scope": "off", // not needed with React 17+
      "react/prop-types": "off", // using TS instead
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // Configuration files (Node.js environment)
  {
    files: [
      "*.config.js",
      "*.config.mjs",
      "tailwind.config.js",
      "postcss.config.js",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
      "no-console": "off",
    },
  },
];
