# Reproduces a problem with the mini-css-extract-plugin if the dependencies are linked. 

## To reproduce
1. Run `npm install` (this will install dependencies and setup linking using lerna)
2. Go into `packages/login` and run `npm run build`.