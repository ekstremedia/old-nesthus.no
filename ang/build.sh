#!/bin/bash
echo "Building app..."
ng build
cp -R dist ../js
echo "Finished & copied to ../js/"