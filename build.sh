#!/bin/bash

set -e

echo "Starting Next.js application build and run process..."

if ! command -v yarn &> /dev/null
then
    echo "Yarn could not be found. Please install it to continue."
    exit 1
fi

echo "Installing project images..."

echo "Building the Next.js application for production..."
yarn run build

echo "Starting the Next.js application in production mode..."
echo "The app will be accessible at http://localhost:3000 (or the port specified in your next.config.js)."
yarn run start

echo "Next.js application is now running."
