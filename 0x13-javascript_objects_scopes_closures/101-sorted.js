#!/usr/bin/node

const dict = require('./101-data'); // Import the dict object from 101-data.js

// Create a new dictionary to store user ids by occurrence count
const userIdsByOccurrence = {};

// Iterate through the original dict to organize user ids
for (const userId in dict) {
  const occurrenceCount = dict[userId];

  if (!userIdsByOccurrence[occurrenceCount]) {
    userIdsByOccurrence[occurrenceCount] = [];
  }

  userIdsByOccurrence[occurrenceCount].push(userId);
}

// Print the new dictionary
console.log(userIdsByOccurrence);

