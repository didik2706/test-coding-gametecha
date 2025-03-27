function isValidAnagram(word: string, wordComparator: string): boolean {
  let result = true

  // check length 
  if (word.length !== wordComparator.length) {
    result = false
  }

  // sorting word
  let 
    sortedWord = word.split("").sort(),
    sortedWordComparator = wordComparator.split("").sort()

  for (let i = 0; i < sortedWord.length; i++) {
    if (sortedWord[i] !== sortedWordComparator[i]) {
      result = false
      break;
    }
  }

  return result
}

console.log(isValidAnagram("hello", "world"))