//alert("Hello");
//$("h1").text("Triggerd jquery");
var buttonColors = ['red','blue','green','yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStart = false;
function freshStart()
{
  gameStart=false;
  level=0;
  gamePattern = [];
  userClickedPattern =[];
$("#level-title").text("Press A Key to Start");
}

$(document).keydown(function(event){
  //console.log(event.key);
  if(event.key=='a')
   {if(gameStart==false){
     gameStart=true;
     $("#level-title").text("LEVEL "+level);
     newSequence();
   }
   }
});
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
// var userChosenColor;
// $("#green").click(function(){
//   userChosenColor = "green";
//   playSound(userChosenColor);
//   animatePress(userChosenColor);
//   userClickedPattern.push(userChosenColor);
// });
// $("#red").click(function(){
//   userChosenColor = "red";
//     playSound(userChosenColor);
//     animatePress(userChosenColor);
//   userClickedPattern.push(userChosenColor);
// });
// $("#blue").click(function(){
//   userChosenColor="blue";
//     playSound(userChosenColor);
//     animatePress(userChosenColor);
//   userClickedPattern.push(userChosenColor);
// });
// $("#yellow").click(function(){
//   userChosenColor="yellow";
//     playSound(userChosenColor);
//     animatePress(userChosenColor);
//   userClickedPattern.push(userChosenColor);
// });
$(".btn").click(function(){
  var chosenColor=$(this).attr("id");
  userClickedPattern.push(chosenColor);
  playSound(chosenColor);
  animatePress(chosenColor);

});
