#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy v0.7.2'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/fernando143/nihon-numbers.git master:gh-pages

cd -