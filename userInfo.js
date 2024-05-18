"use strict";
function createUserProfiles(originalNames, modifiedNames) {
  if (originalNames.length !== modifiedNames.length) {
    prompt(
      "The length of original names and modified names arrays must be the same."
    );
  }

  return originalNames.map((originalName, i) => {
    return {
      id: i + 1,
      originalName: originalName,
      modifiedName: modifiedNames[i],
    };
  });
}

// Example usage:
const originalNames = ["Akwasi", "Junior", "Charline"];
const modifiedNames = ["Serwaa", "Robert", "Charles"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
