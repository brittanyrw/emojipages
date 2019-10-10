$(document).ready(function () {
  // Create a variable for the container to hold the emoji cards.
  var emojiCardContainer = $("#books");

  // This array will store all the genre filter options
  var genreFilters = [];

  // Create a variable for the emoji cards.
  var emojiCard = "";

  // Run the random order function below on the data inside data.js. This will display the cards in a random order on the page every time the page is refreshed.
  shuffle(emojiItems);

  // Loop through the data from the data.js file and insert parts of the data into HTML. On each loop, we are appending a new card with the HTML below.
  for (var i in emojiItems) {

    // Add the genres to the genre filters array
    addFilter(genreFilters, emojiItems[i].genres);

    emojiCard +=
      "<div class='emoji-card' data-genre='" + emojiItems[i].genres.join(', ') + "'><div class='emoji-card-wrapper'><div class='hint-container' tabindex='0'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + emojiItems[i].year +
      "</span></p></div><div class='emoji-images' tabindex='0'>" + emojiItems[i].emojiImgs +
      "</div><div class='emoji-card-title hide-card'>";

    emojiCard += "<div class='title-content'><h3>" + emojiItems[i].title +
      " (" + emojiItems[i].year + ")" + "</h3><div class='author-container'><h4>" + emojiItems[i].author + "</h4></div>";

    emojiCard += "</div></div></div></div>";
  }

  // Add the filters from the genres.md file
  addFilterFromGenres(genreFilters, initGenreFilter);

  // Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.
  emojiCardContainer.html(emojiCard);

  // Run Twemoji to change all emojis to Twitter emojis.
  twemoji.parse(document.body);

  // Add the count of number of shows/movies to the footer.
  $("footer span").append(emojiItems.length);


  // Display movies and show in a random order, the random order will refresh on page reload. This function is used above before the cards are rendered on the page.
  function shuffle(array) {
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

    return array;
  }

  /**
   * Add a filter option to the passed filter array
   * @param {string[]} filterArray The filter array to push the filter in
   * @param {string | string[]} filter The filter or filters to add in the array
   */
  function addFilter(filterArray, filter) {
    // Check that the filterArray is passed and it is an array
    if (filterArray && Array.isArray(filterArray)) {

      // Check that the filter is passed
      if (typeof filter !== "undefined") {

        // Check if filter is an array or string
        if (Array.isArray(filter)) {
          // Loop through the filter to add in the filterArray
          for (var i = 0, len = filter.length; i < len; i++) {
            // Store the filter that will be added
            var filterToAdd = filter[i];

            // Check that the filter is not empty and add it to the filterArray
            if (filterToAdd && filterToAdd !== "") {
              // Check that the filter array doesnt have the filter to be added
              if (!filterArray.includes(filterToAdd)) {
                // Add the filter to the filterArray
                filterArray.push(filterToAdd);
              }
            }
          }
        } else {
          // Filter is not an array. Check if it is not an empty string
          if (filter !== "") {
            // Check that the filter array doesnt have the filter to be added
            if (!filterArray.includes(filter)) {
              // Add the filter to the filter Array
              filterArray.push(filter);
            }
          }
        }

        filterArray.sort(function (a, b) {
          return sortAlphabetical(a, b, true);
        });

      } else {
        // Else throw an error
        throw new Error("addFilter: filter should be passed as an argument");
      }

    } else {
      // Else throw an error
      throw new Error("addFilter: filterArray should be passed and be an array");
    }
  }

  // // Initialize jQuery Selectric to the filter
  // function initializeSelectric() {
  //   $('select').selectric({
  //     maxHeight: 200;
  //   });
  // }

  /**
   * This function will make an ajax request to read the genres.md file and add filters to the genre filters array
   */
  function addFilterFromGenres(genreFilters, onComplete) {
    $.ajax({
      url: "/genres.md",
      dataType: "text",
      /**
       * This function will run when the ajax request is successfull
       * @param {string} res The response from the ajax request
       */
      success: function (res) {
        // Get the filters array by spliting the text response and filtering the lines that start with an asterisk
        var filtersArray = res.split("\n").filter(function (resLine) {
          if (/^\*/.test(resLine)) {
            return true;
          }
        }).map(function (filter) {
          // Remove the asterisk and the spaces from the filters
          return filter.replace(/\*|\s/g, "").toLowerCase();
        });

        // Add the filters to the genre filters
        addFilter(genreFilters, filtersArray);
      },
      // This a callback that will be called after the request has been completed
      complete: onComplete
    });
  }

  /**
   * This function will initialize the genre filter options
   */
  function initGenreFilter() {
    // Get the genre filter element
    var genreFilterElement = $("#genre-filter");

    // Loop through all of the genre filters
    for (var i = 0, len = genreFilters.length; i < len; i++) {
      // Create a text to display as filters
      var text = genreFilters[i].replace(/-/g, " ");
      text = text.charAt(0).toUpperCase() + text.slice(1);

      // Add an option to the genre filter element
      genreFilterElement.append($("<option>", {
        value: genreFilters[i],
        text: text,
      }));
    }

    // Handle change events of the genre filter element
    genreFilterElement.change(function (event) {
      handleGenreFilterChange(event.target.value);
    });
  }

  /**
   * Handle the change events of the genre filter select dropdown
   * @param {string} filter The genre filter to add
   */
  function handleGenreFilterChange(filter) {
    // Create a variable to store how many books are hidden
    var hiddenLength = 0;

    // Check if show all is selected
    if (filter === 'show-all') {
      // Remove the is hidden class from all the emoji cards
      $(".emoji-card").removeClass("is-hidden");
    } else {
      // Else a different filter was selected
      // Hide all the emoji cards and show only the ones that have the selected genre
      $(".emoji-card").each(function (index, element) {
        if ($(element).data("genre").includes(filter)) {
          $(element).removeClass("is-hidden");
        } else {
          $(element).addClass("is-hidden");
          // Increase the hidden length
          hiddenLength++;
        }
      });
    }

    // Check if all emoji items are hidden
    if (hiddenLength === emojiItems.length) {
      var text = filter.replace(/-/g, " ");
      text = text.charAt(0).toUpperCase() + text.slice(1);
      // Display a message saying that no results were found
      $("#message").html("<p>No results were found for <strong>" + text + "</strong> category. Please choose a different filter.");
      $("#message").show();
    } else {
      // Else remove the message
      $("#message").html("");
      $("#message").hide();
    }

  }

  $(".filters-options").click(function () {
      $(this).toggleClass("select-arrow-active")
  });

  /**
   * Sort an array alphabetical
   * @param {string} a The first property to check
   * @param {string} b The second property to check
   * @param {boolean} asc If we should sort ascending or descending order
   */
  function sortAlphabetical(a, b, asc) {
    if (a < b) { return asc ? -1 : 1; }
    if (a > b) { return asc ? 1 : -1; }

    return 0;
  }

  // Expand the emoji card when clicked to reveal the song name, artist and music video link.
  $("#books").on("click keypress", ".emoji-images", function () {
    $(this)
      .siblings(".emoji-card-title")
      .toggleClass("hide-card");
  });

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

});
