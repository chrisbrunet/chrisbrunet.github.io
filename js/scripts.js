/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Get the card elements
const cards = document.querySelectorAll('.card');

// Add event listeners to each card
cards.forEach((card) => {
  // Add event listener for mouseover
  card.addEventListener('mouseover', () => {
    // Add a CSS class to raise the card
    card.classList.add('raised');
  });

  // Add event listener for mouseout
  card.addEventListener('mouseout', () => {
    // Remove the CSS class to lower the card
    card.classList.remove('raised');
  });
});

