import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

const eslintConfig = [
  { ignores: ['out/**', '.next/**', 'local/**', 'node_modules/**'] },
  ...coreWebVitals,
  ...typescript,
  prettier,
];

export default eslintConfig;
