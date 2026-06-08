# Implementation Step

## Initial Setup
1.  init project
```bash
pnpm create vite .
```

2. choose `typescript`

## Identify basic components
1. Chat input box
2. Chat output area

## React Router
1. Install React Router
```bash
pnpm install react-router
```

## Add @ alias for path resolution
1. Update `vite.config.ts`
```ts
resolve: {
  alias: {
    '@': '/src',
  },
},
```
2. Update `tsconfig.app.json`
```json
"compilerOptions": {
  "paths": {
    "@/*": ["./src/*"]
  },
  ...
```
