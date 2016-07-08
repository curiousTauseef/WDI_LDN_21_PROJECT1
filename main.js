//oop

var numberOfSquares = 16;

//Calling this function creates the squares on the page
function CreateSquares(){
  //loop to create squares
  for (var i = 0; i < numberOfSquares; i++) {

    if(i === 0) {
      $("ol").append("<li id='" + i + "' class='blank'>");
    }
    else {
      $("ol").append("<li id='" + i + "' class='square'>");
    }
  }

  //Add event listeners so that clicked square swaps classes and Ids.
  var gridSize = Math.sqrt($("li").length);

  $("li").on("click", function() {

    var clickedIndex = ($(this).index());
    var blankSquare = $(".blank");
    var blankSquareIndex = $(".blank").index();
    var blankSquareId = $(".blank").attr("id");
    var clickedSquareId = $(this).attr("id");

    if(clickedIndex === blankSquareIndex+1 || clickedIndex === blankSquareIndex+gridSize || clickedIndex === blankSquareIndex-1 || clickedIndex === blankSquareIndex-gridSize) {
      
      blankSquare.attr("class", "square").attr("id",clickedSquareId);
      $(this).attr("class", "blank").attr("id",blankSquareId);
    }

  });


} // closing tag for CreateSquares








