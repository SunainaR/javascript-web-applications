class NotesView {
  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    //dependency injection of model into view class
    this.model = model;
    //listener on button
    this.buttonEl = document.querySelector('#add-note-button')
    this.buttonEl.addEventListener('click', () => {
      this.displayNotes();
    });
  }

  displayNotes() {

    

    // call the getNotes method on the model
    const notes = this.model.getNotes();
    const newNote = document.querySelector('#note-input').value;
    this.model.addNote(newNote);

    console.log(notes)

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