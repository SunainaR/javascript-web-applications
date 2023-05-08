/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');


describe("Page View", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  
  it("displays note", () => {
    //Arrange 
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another note');

    //Act
    view.displayNotes();

    //Assert
    expect(document.querySelectorAll(".note").length).toBe(2)
    expect(document.querySelector(".note").innerText).toBe('A first note')

  });

})


/*
have a constructor
the model should be dependency-injected into it.
have a method displayNotes which will:
get the list of notes from the model.
for each note, create a new div element on the page (with an HTML class "note").
*/