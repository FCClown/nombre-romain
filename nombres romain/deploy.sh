#!/bin/bash

git fetch

git checkout dev

npm build

buildResult=$?

if [$buildResult -ne 0]; then
    echo "Build error"
    git tag failures/test
    git reset --hard <>
    git push -f origin dev
    exit $buildResult
fi

npm test

testResult=$?

if [$testResult -ne 0]; then
    echo "test error"
    git tag failures/test
    git reset --hard <>
    git push -f origin dev
    exit $testResult
fi

npm clean

git checkout main
git merge dev
git push main

exit 0