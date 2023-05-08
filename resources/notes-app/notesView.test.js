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

  it("adds a note and displays it after button click and clears input box", () => {
    //Arrange 
    const model = new NotesModel();
    const view = new NotesView(model);
    const buttonEl = document.querySelector('#add-note-button');
    const inputEl = document.querySelector('#note-input')

    //Act
    inputEl.value = 'Meow';
    buttonEl.click();

    //Assert
    expect(document.querySelectorAll(".note").length).toBe(1)
    expect(document.querySelector(".note").innerText).toBe('Meow')
    expect(inputEl.value).toBe("")

  });

  it("adds a note and displays both after button clicks", () => {
    //Arrange 
    const model = new NotesModel();
    const view = new NotesView(model);
    const buttonEl = document.querySelector('#add-note-button');
    const inputEl = document.querySelector('#note-input')

    //Act
    inputEl.value = 'Meow';
    buttonEl.click();

    inputEl.value = 'Woof';
    buttonEl.click();


    //Assert
    expect(document.querySelectorAll(".note").length).toBe(2)

  });

})