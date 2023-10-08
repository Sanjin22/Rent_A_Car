var searchClick = function () {
  var text = document.getElementById("text-form").value;

  var found = window.find(text);

  if (!found) {
    // Display the custom pop-up with a fade-in effect
    var customPopup = document.getElementById("custom-popup");
    var searchQuery = document.getElementById("search-query");
    searchQuery.textContent = "'" + text + "'";

    // Apply opacity to show the pop-up with a transition
    customPopup.style.opacity = "1";
    customPopup.style.display = "block";
  }
};

var closePopup = function () {
  // Close the custom pop-up with a fade-out effect
  var customPopup = document.getElementById("custom-popup");

  // Apply opacity to hide the pop-up with a transition
  customPopup.style.opacity = "0";

  // Hide the pop-up after the transition completes
  setTimeout(function () {
    customPopup.style.display = "none";
  }, 300); // Adjust the time to match your transition duration
};
/*var searchClick = function () {
  var text = document.getElementById("text-form").value;
  var found = window.find(text);
  if (found) {
    var foundNode = window.getSelection().anchorNode;
    if (foundNode) {
      foundNode.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
};
*/
