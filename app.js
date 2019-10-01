import "./main.css";
import emojiItems from "./data";

// Create a variable for the container to hold the emoji cards.
const emojiCardContainer = document.querySelector("#books");

// Create a variable for the emoji cards.
let emojiCard = "";

// Run the random order function below on the data inside data.js. This will display the cards in a random order on the page every time the page is refreshed.
shuffle(emojiItems);

// Loop through the data from the data.js file and insert parts of the data into HTML. On each loop, we are appending a new card with the HTML below.
for (let i in emojiItems) {
  emojiCard +=
  "<div class='emoji-card'><div class='emoji-card-wrapper'><div class='hint-container' tabindex='0'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + emojiItems[i].year +
  "</span></p></div><div class='emoji-images' tabindex='0'>" + emojiItems[i].emojiImgs +
  "</div><div class='emoji-card-title hide-card'>";

  emojiCard += "<div class='title-content'><h3>" + emojiItems[i].title +
      " (" + emojiItems[i].year + ")" + "</h3><div class='author-container'><h4>" + emojiItems[i].author + "</h4></div>";

  emojiCard += "</div></div></div></div>";

}

// Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.
emojiCardContainer.innerHTML = emojiCard;

// Run Twemoji to change all emojis to Twitter emojis.
twemoji.parse(document.body);

// Add the count of number of shows/movies to the footer.
document.querySelector("footer span").innerHTML = emojiItems.length;

// Display movies and show in a random order, the random order will refresh on page reload. This function is used above before the cards are rendered on the page.
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Expand the emoji card when clicked to reveal the song name, artist and music video link.
const toggleShowCard = elem => elem && elem.classList.toggle("hide-card");
document.querySelectorAll(".emoji-images").forEach(elem => {
  elem.addEventListener("click", function (e) {
    toggleShowCard(e.target.closest(".emoji-images").nextElementSibling);
  });
});

const showHint = elem => elem && elem.classList.add("hint-reveal");
const hideHint = elem => elem && elem.classList.remove("hint-reveal");
document.querySelectorAll(".hint-container").forEach(elem => {
  // Display a hint (type ie tv, movie or musical) when hovering over the question mark.
  elem.addEventListener("mousedown", function (e) {
    showHint(e.target.closest(".hint-container").querySelector(".hint"));
  });
  elem.addEventListener("keypress", function (e) {
    showHint(e.target.querySelector(".hint"));
  });

  // Hide hint (type ie tv, movie or musical) when the user stops hovering over the question mark.
  elem.addEventListener("mouseleave", function (e) {
    hideHint(e.target.querySelector(".hint"));
  });
  elem.addEventListener("focusout", function (e) {
    hideHint(e.target.querySelector(".hint"));
  });
});

