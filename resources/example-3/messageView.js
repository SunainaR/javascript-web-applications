class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.showButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    
    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });
  }

  displayMessage() {
    const message = document.querySelector('#message-input').value;

    const messageEl = document.createElement('div');
    messageEl.innerText = message;
    messageEl.id = 'message';

    //would be interesting to change this so it appears before the button using method rather than altering html file
    document.querySelector('#main-container').append(messageEl);
    
    console.log('Thanks for clicking me!');
    // To set the user input field to empty again once the user has clicked button
    document.querySelector('#message-input').value = '';
  }

  // Can get uncaught type error when the message is null
  hideMessage() {
    
    document.querySelector('#message').remove();
    
    console.log('Removed message');
  }


}

module.exports = MessageView;