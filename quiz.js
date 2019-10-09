$(document).ready(function () {
    //create variable to store the score
    var score = 0;

    // Create a variable for the container to hold the emoji cards.
    var emojiCardContainer = $("#books");
  
    // Create a variable for the emoji cards.
    var emojiCard = "";
    
    // Create and assign a variable for number of books
    var numOfBooks = $("select option:selected").attr("value");

    // Create emoji array for selected number of emojis
    var emojis = shuffleAndShorten(emojiItems, numOfBooks);


    generateQuiz(numOfBooks);

    //Function to run and reset quiz board
    function generateQuiz(num) {
      emojis = shuffleAndShorten(emojiItems, num);

      // Loop through the data from the data.js file and insert parts of the data into HTML. On each loop, we are appending a new card with the HTML below.
      for (var i in emojis) {
        emojiCard +=
        "<div class='emoji-card'><div class='emoji-card-wrapper'><div class='hint-container' tabindex='0'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + emojis[i].year +
        "</span></p></div><div class='emoji-images' tabindex='0'>" + emojis[i].emojiImgs +
        "</div><div class='emoji-card-title hide-card'>";
        
        emojiCard += "<div class='title-content'><h3>" + emojiItems[i].title +
      " (" + emojiItems[i].year + ")" + "</h3><div class='author-container'><h4>" + emojiItems[i].author + "</h4></div>";

        emojiCard += "</div></div><div class='emoji-textbar' id=" + i + " contenteditable='true'>";
        
        emojiCard += "</div></div></div>";
      }
    
      // Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.
      emojiCardContainer.html(emojiCard);
    
      // Run Twemoji to change all emojis to Twitter emojis.
      twemoji.parse(document.body);
    
      // Add the count of number of shows/movies to the footer.
      $("footer span").html(emojis.length);
    }
  
  
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

      return array.slice(0, num);
    }
  
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

    $(".book-count").change(function () {
      numOfBooks = $("select option:selected").attr("value");
      emojiCardContainer.html("");
      emojiCard = "";
      generateQuiz(numOfBooks);
    });

    // Submit and check the answers given
    $("#submit").click(function(){
      $(".filters-options").attr("hidden", "true");
      $(".filters-heading").attr("hidden", "true");

      //check the answers regardless of case
      for (var j in emojis) {
        if ($("#" + j).html().toUpperCase() === emojis[j].title.toUpperCase()) {
          score += 1;
          $("#" + j).addClass("right-answer");
        }
        else {
          $("#" + j).addClass("wrong-answer");
        }
      }
      $("footer").html("<p class='score'>Your score is <span>" +  score + " / " + numOfBooks + "</span></p>");
      $("footer").append("<a class='submit-button' id='submit' href='quiz.html'>Try Again?</a>")
      $("footer").append("<a href='https:/'" + "'/twitter.com/share?ref_src=twsrc%5Etfw' class='twitter-share-button' data-size='large' data-text='I scored "+ score + "/" + numOfBooks + " on Emojipages.com!' data-hashtags='Emojipages' data-show-count='false'>Tweet Your Score!</a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>")

      for (var k in emojis) {
        $("#" + k).attr("contenteditable", "false").html(emojis[k].title);
      }

      // Expand the emoji card when clicked to reveal the song name, artist and music video link.
      $("#books").on("click keypress", ".emoji-images", function () {
        $(this)
          .siblings(".emoji-card-title")
          .toggleClass("hide-card");
      });

    });
});
  