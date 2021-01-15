class Spellchecker {

  checkString(string) {
    var stringSplit = string.split(" ")
    return this.checkWord(stringSplit)
  }

  checkWord(string) {
    var highlightedString = []
    string.forEach(function(element) {
      if(element === "wrld"){
        highlightedString.push("~wrld~")
      } else {
        highlightedString.push(element)
      }
    })
    return highlightedString.join(" ")
  }


}
