#!/usr/bin/node

const fs = require('fs');
const path = require('path');

// Check if all required arguments are provided
if (process.argv.length !== 5) {
  console.error('Usage: node concat-files.js <sourceFile1> <sourceFile2> <destinationFile>');
  process.exit(1);
}

// Get file paths from command-line arguments
const sourceFile1 = process.argv[2];
const sourceFile2 = process.argv[3];
const destinationFile = process.argv[4];

// Read the content of source files
const content1 = fs.readFileSync(sourceFile1, 'utf8');
const content2 = fs.readFileSync(sourceFile2, 'utf8');

// Concatenate the contents
const concatenatedContent = content1 + content2;

// Write the concatenated content to the destination file
fs.writeFileSync(destinationFile, concatenatedContent);

console.log(`Concatenated ${path.basename(sourceFile1)} and ${path.basename(sourceFile2)} to ${path.basename(destinationFile)}`);

