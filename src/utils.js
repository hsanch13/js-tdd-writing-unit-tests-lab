export const isPalindrome = (word) => {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
  };