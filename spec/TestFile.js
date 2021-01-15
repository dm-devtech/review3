describe("Spellchecker", function() {

describe("testing misspelled words", function() {
  it('When passed a string of 2 words with it highlights incorrect word', function() {
    newSpellChecker = new Spellchecker
    expect(newSpellChecker.checkString("hello wrld")).toEqual("hello ~wrld~")
  })

  it('When passed a string of 3 words it highlights incorrect word', function() {
    newSpellChecker = new Spellchecker
    expect(newSpellChecker.checkString("hello wrld hello")).toEqual("hello ~wrld~ hello")
  })

  it('When passed a string of 10 words with no spelling mistakes', function() {
    newSpellChecker = new Spellchecker
    expect(newSpellChecker.checkString("I awoke one morning to the sound of a rook")).toEqual("I awoke one morning to the sound of a rook")
  })

  it('When passed a string of 6 words all misspelled so should be highlighted', function() {
    newSpellChecker = new Spellchecker
    expect(newSpellChecker.checkString("We exchanged parcels on Christmas Day")).toEqual("~We~ ~exchanged~ ~parcels~ ~on~ ~Christmas~ ~Day~")
  })
})


});
