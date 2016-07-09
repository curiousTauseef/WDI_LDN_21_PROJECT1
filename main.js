var numberOfSquares = 9;
var rootOfSquares = Math.sqrt(numberOfSquares);
var squarePixels = Math.floor( (440 - (rootOfSquares*2*5))/rootOfSquares );

var gridArray = [];
var winArray = [];
var playerArray = [];

$ol = $("ol");
$lis = {};
$startButton = $("#startButton")

function generateRandomColor() {
  var x=Math.round(0xffffff * Math.random()).toString(16);
  var y=(6-x.length);
  var z="000000";
  var z1 = z.substring(0,y);
  var color = "#" + z1 + x;
  return color;
}

$startButton.on("click", CreateSquares);
//Calling this function creates the squares on the page
function CreateSquares(){
  //loop to create squares
  for (var i = 0; i < numberOfSquares; i++) {

    var randomColor = generateRandomColor();

    if(i === 0) {
      $ol.append("<li id='square" + i + "' class='blank' style='width:" + squarePixels + "px; height:"+squarePixels +"px;' data-index='"+i+"'>" + i + "</li>");
    }
    else {
      $ol.append("<li id='square" + i + "' class='square' style='width:" + squarePixels + "px; height:"+squarePixels +"px; background-color:"+randomColor+";   ' data-index='"+i+"' >" + i + "</li>");
    }

    gridArray.push(i); 

    // setTimeout(function(){
    //   shuffleIds();
    // }, 2000)

  }

  //Add event listeners so that clicked square swaps classes and Ids.
  var gridSize = Math.sqrt($("li").length);

  $lis = $("li");

  $lis.on("click", function() {

    var clickedIndex = ($(this).index());
    var clickedSquareDataIndex = $(this).attr("data-index");
    var clickedStyle = $(this).attr("style");
    var blankSquare = $(".blank");
    var blankSquareIndex = $(".blank").index();
    var blankSquareDataIndex = $(".blank").attr("data-index");
    

    // if(clickedIndex === blankSquareIndex+1 || clickedIndex === blankSquareIndex+gridSize || clickedIndex === blankSquareIndex-1 || clickedIndex === blankSquareIndex-gridSize) {
      
      blankSquare.attr("class", "square").attr("data-index",clickedSquareDataIndex).attr("style", clickedStyle).html(clickedSquareDataIndex);

      $(this).attr("class", "blank").attr("data-index",blankSquareDataIndex).html(blankSquareDataIndex);
    // }

    winArray = [];
    $lis.each(function (i) {
      // winArray.push($(this).index());      
      winArray.push($(this).attr("data-index"));
    });
    
    checkForWin();

  });

} // closing tag for CreateSquares

function checkForWin() { 
  console.log(winArray)
  if (gridArray.toString() === winArray.toString()) {
    alert("You Win!");
  }
}

function shuffleIds() {

  function shuffleArray(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array; // returns shuffled array
  }

  var liDataIndexes = $lis.toArray().map(function(elem) {
    return elem.getAttribute("data-index");

  });

  var randomizedDataIndexes = shuffleArray(liDataIndexes);

  randomizedDataIndexes.forEach(function(id, i) {
    $lis.eq(i).attr("data-index", id).html(id);
    $lis.eq(i).attr("id", "square"+id).html(id);
  });

  resetClasses();

}

function resetClasses() {
  $lis.attr("class", "blank");

  setTimeout(function(){

  $lis.attr("class", "square");
  $lis.filter("#square0").attr("class", "blank");
  
  }, 500);
}

//function to randomize Lis. 
$.fn.randomize = function(selector){
  var $elems = selector ? $(this).find(selector) : $(this).children(),
  $parents = $elems.parent();

  $parents.each(function(){
    $(this).children(selector).sort(function(){
      return Math.round(Math.random()) - 0.5;

    }).detach().appendTo(this);
  });

  return this;
};






