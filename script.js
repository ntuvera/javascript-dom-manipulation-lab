let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  }
  randomQuote();

  // Do all of your work below in the following functions
  // DON'T FORGET TO CALL THE FUNCTIONS TO SEE YOUR WORK!

  // Accessing DOM Elements (Querying)

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Change the text of the title to something shorter.
  function shortenPageTitle() {
    document.getElementById('main-title').innerText = 'HEY HEY HEY HEY';
  }
  // shortenPageTitle();

  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  function changeBodyBgColor() {
    document.body.style.backgroundColor = 'lightblue';
  }
  // changeBodyBgColor();
  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  function removeLastFavoriteThing() {
    document.getElementById('favorite-things').lastChild.remove();
  }
  // removeLastFavoriteThing();
  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem.
  // Remember you might have to iterate through the list of elements
  function makeSpecialTitlesBigger() {
    let specialItems = document.getElementsByClassName('special-title');
    for (let i = 0; i < specialItems.length; i++) {
      specialItems[i].style.fontSize = '2rem';
    }
  }
  // makeSpecialTitlesBigger()
  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  function RemoveChicagoRace() {
    document.getElementById('past-races').children[3].remove();
  }

  // Creating New DOM Elements

  // Part 6
  // Let's add to DOM's  Past Races  list.
  // Create a new <li> element, change the new <li> text to the name of a city, and append it to the  Past Races  list.
  function addPastRace(city) {
    let newLi = (document.createElement('li').innerText = city);
    document.getElementById('past-races').append(newLi);
  }

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text.
  // Think about what order you want to create the elements, and what order you want to append them in.
  function createNewBlogPost() {
    let newDiv = document.createElement('div');
    newDiv.className = 'blog-post purple';
    let newHeader = document.createElement('h1');
    newHeader.innerText = 'Russia';
    let newP = document.createElement('h2');
    newP.innerText =
      'Lorem ispum and what not and other stuffLorem ispum and what not and other stuf ';
    newDiv.append(newHeader);
    newDiv.append(newP);
    document
      .getElementById('dom-adventures')
      .insertAdjacentElement('afterend', newDiv);
  }
  createNewBlogPost();
});
