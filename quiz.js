$(document).ready(function () {
    //create variable to store the score
    var score = 0; 

    // Create a variable for the container to hold the emoji cards.
    var emojiCardContainer = $("#books");
  
    // Create a variable for the emoji cards.
    var emojiCard = "";
    
    // Create and assign a variable for number of books
    var num = 10;

    // Run the random order function below on the data inside data.js. This will display the cards in a random order on the page every time the page is refreshed.
    shuffleAndShorten(emojiItems, num);

    // Loop through the data from the data.js file and insert parts of the data into HTML. On each loop, we are appending a new card with the HTML below.
    for (var i in emojiItems) {
      emojiCard +=
      "<div class='emoji-card'><div class='emoji-card-wrapper'><div class='hint-container' tabindex='0'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + emojiItems[i].year +
      "</span></p></div><div class='emoji-images' tabindex='0'>" + emojiItems[i].emojiImgs +
      "</div><div class='emoji-card-title hide-card'></div></div>";
      
      emojiCard += "<div class='emoji-textbar' id=" + i + " contenteditable='true'>";
      
      emojiCard += "</div></div></div>";
      console.log(emojiItems[i].title);
    }
  
    // Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.
    emojiCardContainer.html(emojiCard);
  
    // Run Twemoji to change all emojis to Twitter emojis.
    twemoji.parse(document.body);
  
    // Add the count of number of shows/movies to the footer.
    $("footer span").append(emojiItems.length);
  
  
    // Display movies and show in a random order, the random order will refresh on page reload. This function is used above before the cards are rendered on the page.
    // shuffleAndShorten added feature: shortens the array to the number specified.
    function shuffleAndShorten(array, num) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
  
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      array.splice(num, array.length);
      return array;
    }
  /*
    // Expand the emoji card when clicked to reveal the song name, artist and music video link.
    $("#books").on("click keypress", ".emoji-images", function () {
      $(this)
        .siblings(".emoji-card-title")
        .toggleClass("hide-card");
    });*/
  
    // Display a hint (type ie tv, movie or musical) when hovering over the question mark.
    $("#books").on("mousedown keypress", ".hint-container", function () {
      $(this)
        .find(".hint")
        .addClass("hint-reveal");
    });
  
    // Hide hint (type ie tv, movie or musical) when the user stops hovering over the question mark.
    $("#books").on("mouseleave focusout", ".hint-container", function () {
      $(this)
        .find(".hint")
        .removeClass("hint-reveal");
    });
  
    // Submit and check the answers given
    $("#submit").click(function(){
      for (var i in emojiItems) {
        console.log($("#" + i).html());
        if ($("#" + i).html() === emojiItems[i].title) {
          score += 1;
        }
      }
      $(".emoji-textbar").css("background-color", "palegoldenrod");
      $("footer").html("<p class='score'>Your score is <span>" +  score + " / " + num + "</span></p>");
      for (var j in emojiItems) {
        if (emojiItems[j].title.length > 25) {
          $("#" + j).toggleClass("emoji-textbar-double")
        }
        $("#" + j).attr("contenteditable", "false").html(emojiItems[j].title);
      }
  }); 

  });
  