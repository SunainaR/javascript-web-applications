const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

console.log('The notes app is running');

model = new NotesModel;
view = new NotesView(model);

model.addNote('This is an example note');
model.addNote('This is another note');

view.displayNotes();

console.log(model.getNotes());

