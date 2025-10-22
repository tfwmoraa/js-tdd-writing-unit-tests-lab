// Your code here
// src/utils.js

export function isPalindrome(word) {
  if (typeof word !== "string") throw new Error("Input must be a string");

  // Empty string check FIRST
  if (word.length === 0) return false;

  // Check for non-alphabetic characters
  if (!/^[A-Za-z]+$/.test(word)) throw new Error("Invalid characters");

  const cleanWord = word.toLowerCase();
  return cleanWord === [...cleanWord].reverse().join("");
}
