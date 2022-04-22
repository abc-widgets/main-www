# Demo Site

Click the button for fancy features!

Blog Post: https://iws.io/2022/github-actions-repositories-sharing-private-packages

## Build and run (locally)

Clone [`secret-math-funcs`](https://github.com/abc-widgets/secret-math-funcs) and open terminal to its directory.
 1. `npm install`
 1. `npm run build` in secret-math-funcs


Clone (this) project and open a terminal to its root.
 1. `npm install` (If this fails, see below)
 1. `npm run link` (local script that links up the local version of the library).
 1. `npm start`


When `npm install` fails for `main-www` because you don't have GitHub Package Registry access. (The real solution is setup a PAC and authenticate; see my blog post above). But you can also: 
 1. `npm r @abc-widgets/secret-math-funcs` Removing the ref to the package
 1. `npm ci` Install everything else.
 1. `npm run link`
 1. `npm start`
