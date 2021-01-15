class Spellchecker {

  checkString(string) {
    var stringSplit = string.split(" ")
    return this.checkWord(stringSplit)
  }

  dictionary() {
    const words = ["hello", "world", "I", "awoke", "one", "morning", "to", "the", "sound", "of", "a", "rook"]
    return words
  }

  checkWord(string) {
    const highlightedString = []
    const words = this.dictionary()
    string.forEach(function(element) {
      if (words.includes(element)) highlightedString.push(element)
      if (!words.includes(element)) highlightedString.push(`~${element}~`)
    })
    return highlightedString.join(" ")
  }

}
