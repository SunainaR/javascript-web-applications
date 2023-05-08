/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('clicks the button', () => {
    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Hello, this is my message. Meow!'

    buttonEl.click();
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('div#message').innerText).toBe('Hello, this is my message. Meow!')
    expect(inputEl.value).toBe('')
  });

  it('clicks the hide message button', () => {
    const view = new MessageView();
    //show message
    const showButtonEl = document.querySelector('#show-message-button');
    showButtonEl.click();
    //hide message
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();
    expect(document.querySelector('#message')).toBeNull();
  });


});