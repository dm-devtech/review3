describe("Spellchecker", function() {

  it('When passed a string of 2 words with an error it highlights incorrect word', function() {
    newSpellChecker = new Spellchecker
    expect(newSpellChecker.checkString("hello wrld")).toEqual("hello ~wrld~")
  })

  it('When passed a string of 3 words an error it highlights incorrect word', function() {
    newSpellChecker = new Spellchecker
    expect(newSpellChecker.checkString("hello wrld hello")).toEqual("hello ~wrld~ hello")
  })

});
