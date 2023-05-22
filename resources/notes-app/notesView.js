class NotesView {
  constructor(model, client) {
    this.mainContainerEl = document.querySelector('#main-container');
    //dependency injection of model and client classes into view class
    this.model = model;
    this.client = client;
    //listener on button
    this.buttonEl = document.querySelector('#add-note-button')
    this.buttonEl.addEventListener('click', () => {
      this.addNewNote();
    });
  }

  addNewNote() {
    const newNote = document.querySelector('#note-input')
    this.model.addNote(newNote.value);
    this.displayNotes();
    newNote.value = "";
  }

  #clearAll() {
    const allNoteEls = document.querySelectorAll('.note')
    allNoteEls.forEach((noteEl) => {
      noteEl.remove();
    });
  }

  displayNotes() {
    this.#clearAll();

    // call the getNotes method on the model
    const notes = this.model.getNotes();

    //for each element of notes array
    notes.forEach((note) => {

      // create a new div element
      const noteEl = document.createElement('div');

      //set its properties as below
      noteEl.innerText = note;
      noteEl.className = 'note';
      //append the main container with the new div element
      this.mainContainerEl.append(noteEl);
     
    });
    
  }
}

module.exports = NotesView;