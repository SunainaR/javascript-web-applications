const NotesModel = require('./notesModel')

console.log('The notes app is running');

model = new NotesModel;

console.log(model.getNotes());

