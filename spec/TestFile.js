describe("Spellchecker", function() {

  it('When passed a string with an error it highlights incorrect word', function() {
    newSpellChecker = new Spellchecker
    expect(newSpellChecker.checkString("hello wrld")).toEqual("hello ~wrld~")
  })

});
