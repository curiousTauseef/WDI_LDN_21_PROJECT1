//oop


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

});





