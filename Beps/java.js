// Get all header buttons
const headerButtons = document.querySelectorAll('.HeaderLinks button');

// Add a click event listener to each button
headerButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Alert the user that the button was clicked
    alert(`The ${button.textContent} button was clicked!`);
  });
});