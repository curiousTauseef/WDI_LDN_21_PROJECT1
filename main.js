var backgroundAudio = new Audio("sounds/jazz-loop.wav");

backgroundAudio.play();
setInterval(function(){
  backgroundAudio.play();
  console.log("music playing");
}, 68000);




var numberOfSquares = 0;
var gridArray = [];
var playerArray = [];
var counter;
// var playerTime = "";
// var gameInPlay = false;
var count = 10;


$ol = $("ol");
$lis = {};

$easyButton = $("#easyButton")
$normalButton = $("#normalButton")
$hardButton = $("#hardButton")

function generateRandomColor() {
  var x=Math.round(0xffffff * Math.random()).toString(16);
  var y=(6-x.length);
  var z="000000";
  var z1 = z.substring(0,y);
  var color = "#" + z1 + x;
  return color;
}

// var timeOut = function() {
//   setInterval(function(){ 
//     alert("You ran out of time. The computer messes up your board"); 
//     shuffleIds();
//   }, 10000);
// }

$easyButton.on("click", function() {
  if ($("li").length === 0) {
    numberOfSquares = 9;
    rootOfSquares = Math.sqrt(numberOfSquares);
    squarePixels = Math.floor( (440 - (rootOfSquares*2*5))/rootOfSquares );
    CreateSquares();
    shuffleIds();
  }
});

$normalButton.on("click", function() {
  if ($("li").length === 0) {
    numberOfSquares = 16;
    rootOfSquares = Math.sqrt(numberOfSquares);
    squarePixels = Math.floor( (440 - (rootOfSquares*2*5))/rootOfSquares );
    CreateSquares();
    shuffleIds();
  }
});

$hardButton.on("click", function() {
  if ($("li").length === 0) {
    numberOfSquares = 25;
    rootOfSquares = Math.sqrt(numberOfSquares);
    squarePixels = Math.floor( (440 - (rootOfSquares*2*5))/rootOfSquares );
    CreateSquares();
    shuffleIds();
  }
});


//Calling this function creates the squares on the page
function CreateSquares(){

  //loop to create squares
    for (var i = 0; i < numberOfSquares; i++) {

      var randomColor = generateRandomColor();

      if(i === 0) {
        $ol.append("<li id='square" + i + "' class='blank animated infinite pulse' style='width:" + squarePixels + "px; height:"+squarePixels +"px;' data-index='"+i+"'>" + i + "</li>");
      }
      else {
      $ol.append("<li id='square" + i + "' class='square animated flipInY' style='width:" + squarePixels + "px; height:"+squarePixels +"px; background-color:"+randomColor+";   ' data-index='"+i+"' >" + i + "</li>");
      }
      gridArray.push(i);
      gameInPlay = true;   
    }


  //Add event listeners so that clicked square swaps classes and Ids.
  var gridSize = Math.sqrt($("li").length);

  $lis = $("li");

  $lis.on("click", function() {

    var audio = new Audio("sounds/pop.wav");
    audio.play();

    var clickedIndex = ($(this).index());
    var clickedSquareDataIndex = $(this).attr("data-index");
    var clickedStyle = $(this).attr("style");
    var blankSquare = $(".blank");
    var blankSquareIndex = $(".blank").index();
    var blankSquareDataIndex = $(".blank").attr("data-index");
    

    // if(clickedIndex === blankSquareIndex+1 || clickedIndex === blankSquareIndex+gridSize || clickedIndex === blankSquareIndex-1 || clickedIndex === blankSquareIndex-gridSize) {
      
      blankSquare.attr("class", "square animated flipInY").attr("data-index",clickedSquareDataIndex).attr("style", clickedStyle).html(clickedSquareDataIndex);

      $(this).attr("class", "blank animated infinite pulse").attr("data-index",blankSquareDataIndex).html(blankSquareDataIndex);
    // }

    playerArray = [];
    $lis.each(function (i) {  
      playerArray.push($(this).attr("data-index"));
    });
    
    checkForWin();

  });
} // closing tag for CreateSquares

function checkForWin() { 
  console.log(playerArray)
  if (gridArray.toString() === playerArray.toString()) {
    alert("You Win!");
    clearInterval(counter);
    var playerTime = count;
    count = 75;
    console.log(playerTime);
    console.log(count);

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

    var randomColor = generateRandomColor();

    $lis.eq(i).attr("data-index", id).html(id);
    $lis.eq(i).attr("id", "square"+id).html(id);
    $lis.eq(i).attr("style", 
      "width:"+squarePixels+"px;"+
      "height:"+squarePixels+"px;"+  
      "background-color:"+randomColor+";" 
      );

  });

  resetClasses();
  // activateTimer();

}

function resetClasses() {
  $lis.attr("class", " blank animated infinite pulse");

  setTimeout(function(){

  $lis.attr("class", "square animated flipInY");
  $lis.filter("#square0").attr("class", "blank animated infinite pulse");
  
  }, 500);
}



function activateTimer(){
  counter = setInterval(timer, 1000); //1000 will  run it every 1 second

  function timer() {
    count = count - 1;
    console.log(count);
    
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;


    if (seconds > 9) {
      $("#timer").text(seconds+ " seconds remaining")
    }
    else if (seconds <= 9) {
      $("#timer").text(seconds+ " seconds remaining")
    }

    if (count === 0) {

      alert("You ran out of time; the computer messes up your game board!");
      shuffleIds();

      count = 10;

    }
    
    if (count === -1) {
      clearInterval(counter);  
      return;
    }
  }
}








