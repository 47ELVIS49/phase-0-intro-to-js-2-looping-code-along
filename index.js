// Code your solutions in this file
function writeCards(names, event) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage of writeCards:
  const namesArray = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  const messages = writeCards(namesArray, event);
  console.log(messages);
  
  // Example usage of countDown:
  countDown(10);
  