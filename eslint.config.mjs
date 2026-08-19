// ESLint flat config — Next.js 16 compatible.

import nextConfig from "eslint-config-next";

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
      "docs/preview/**",
      "scripts/**",
    ],
  },
  ...nextConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "warn",
    },
  },
];

export default config;
