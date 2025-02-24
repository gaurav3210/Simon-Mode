
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


  if(event.key=='a')
   {if(gameStart==false){
     gameStart=true;
     $("#level-title").text("LEVEL "+level);
     newSequence();
   }
   }
});
function checkAnswer(currentLevel)
{
   if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){

     if(userClickedPattern.length == gamePattern.length){
       setTimeout(function(){
         newSequence();
       },1000);
     }
   }
   else {

     playSound("wrong");
     $("body").addClass("game-over");
     $("#level-title").text("GAME OVER. PRESS R KEY TO RESTART");
     setTimeout(function(){
       $("body").removeClass("game-over");
     },200);
     $(document).keydown(function(event){

        if(event.key=='r')
         freshStart();
     });
   }
}
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
  level+=1;
   $("#level-title").text("LEVEL "+ level);
   var randomNumber = Math.floor(Math.random()*4);
   var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
 $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChosenColor);

}

$(".btn").click(function(){
  var chosenColor=$(this).attr("id");
  userClickedPattern.push(chosenColor);
  playSound(chosenColor);
  animatePress(chosenColor);
  checkAnswer(userClickedPattern.length - 1);

});
