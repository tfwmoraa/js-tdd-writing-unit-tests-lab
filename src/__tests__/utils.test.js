// Your tests here
// src/__tests__/utils.test.js
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome word like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for a palindrome with mixed case letters", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for words with non-alphabetic characters", () => {
    expect(() => isPalindrome("abc123")).toThrow("Invalid characters");
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12345)).toThrow("Input must be a string");
  });
});
