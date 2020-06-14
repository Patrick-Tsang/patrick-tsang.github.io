#!/usr/bin/env sh
set -e
npm run build
cp README.md dist
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Patrick-Tsang/patrick-tsang.github.io.git master


cd -