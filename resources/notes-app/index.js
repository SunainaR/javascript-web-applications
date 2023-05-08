const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

console.log('The notes app is running');

model = new NotesModel;
view = new NotesView(model);

console.log(model.getNotes());

