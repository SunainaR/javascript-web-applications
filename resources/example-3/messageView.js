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
    const messageEl = document.createElement('div');
    messageEl.innerText = 'This message displayed by JavaScript';
    messageEl.id = 'message';

    //would be interesting to change this so it appears before the button using method rather than altering html file
    document.querySelector('#main-container').append(messageEl);
    
    console.log('Thanks for clicking me!');
  }

  hideMessage() {

    document.querySelector('#message').remove();
    
    console.log('Removed message');
  }


}

module.exports = MessageView;