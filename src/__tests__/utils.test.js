import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true if the word is a palindrome", () => {
    const word = "racecar";

    const result = isPalindrome(word);

    expect(result).toBe(true);
  });

  it("returns false if the word is NOT a palindrome", () => {
    const word = "hi"

    const result = isPalindrome(word)

    expect(result).toBe(false)
  })
});