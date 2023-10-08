/*var searchClick = function () {
  var text = document.getElementById("text-form").value;
  window.find(text);
};*/

var searchClick = function () {
  var text = document.getElementById("text-form").value;
  var found = window.find(text);
  if (found) {
    var foundNode = window.getSelection().anchorNode;
    if (foundNode) {
      foundNode.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
};
