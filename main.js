//oop


var numberOfSquares = 4;
var rootOfSquares = Math.sqrt(numberOfSquares);
var squarePixels = Math.floor( (440 - (rootOfSquares*2*5))/rootOfSquares );

var gridArray = [];
var winArray = [];

//Calling this function creates the squares on the page
function CreateSquares(){
  //loop to create squares
  for (var i = 0; i < numberOfSquares; i++) {

    if(i === 0) {
      $("ol").append("<li id='" + i + "' class='blank' style='width:" + squarePixels + "px; height:"+squarePixels +"px;'>" + i + "</li>");
    }
    else {
      $("ol").append("<li id='" + i + "' class='square' style='width:" + squarePixels + "px; height:"+squarePixels +"px'>" + i + "</li>");
    }

    gridArray.push(i); 

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
      
      blankSquare.attr("class", "square").attr("id",clickedSquareId).html(clickedSquareId);
      $(this).attr("class", "blank").attr("id",blankSquareId).html(blankSquareId);
    }

    winArray = [];
    $('li').each(function (i) {
      winArray.push($(this).attr("id"));
    });
    
    console.log(winArray);
    checkForWin();

  });

} // closing tag for CreateSquares

function checkForWin() { 
  if (gridArray.toString() === winArray.toString()) {
    alert("You Win!");
  }
}






