//alert("Hello");
//$("h1").text("Triggerd jquery");
var buttonColors = ['red','blue','green','yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStart = false;

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();

}
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");

  },100);
}
function newSequence(){
  userClickedPattern = [];
   var randomNumber = Math.floor(Math.random()*4);
   var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
 $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChosenColor);

}
