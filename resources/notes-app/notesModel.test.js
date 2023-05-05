const NotesModel = require('./notesModel')

describe('get notes', () => {
  beforeEach(() => {
    model = new NotesModel();
  });

  it('returns an empty array initially', () => {
  expect(model.getNotes()).toEqual ([])
  });

  it('adds a note and returns it in the array', () => {
    model.addNote('Buy milk')
    expect(model.getNotes()).toEqual (['Buy milk'])
  });

  it('adds two note and returns them in the array', () => {
    model.addNote('Buy cat food')
    model.addNote('Go to the gym')
    expect(model.getNotes()).toEqual (['Buy cat food', 'Go to the gym'])
  });

  it('returns an empty array after reset method invoked', () => {
    model.addNote('Buy cat food')
    model.addNote('Go to the gym')
    expect(model.getNotes()).toEqual (['Buy cat food', 'Go to the gym']);
    model.reset()
    expect(model.getNotes()).toEqual ([])
  });

});