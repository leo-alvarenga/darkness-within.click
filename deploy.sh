#!/bin/bash

# simple script to build and deploy to my VPS

TARGET=$1

if [[ -z "$TARGET" ]];
then
    exit 1
fi

npm run predeploy
mkdir ./build/public

mv ./build/*.png ./build/public/

scp -r build/* "root@$TARGET:/var/www/darkness-within/"
