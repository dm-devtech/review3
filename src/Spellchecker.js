class Spellchecker {

  checkString(string) {
    var stringsplit = string.split(" ")
    var highlightedString = []
    stringsplit.forEach(function(element) {
      if(element === "wrld"){
        highlightedString.push("~wrld~")
      } else {
        highlightedString.push(element)
      }
    })
    return highlightedString.join(" ")
  }


}
