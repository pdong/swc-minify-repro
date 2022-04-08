## Description
SWC minify is causing `Uncaught SyntaxError: Identifier 'g' has already been declared` error when importing the @idscan/IDVC library.

## Repro
```bash
$ yarn
$ yarn build
$ yarn start
```

Observe error in console.  If you do `yarn dev` or lock package.json to next version 12.1.0 it is fine.