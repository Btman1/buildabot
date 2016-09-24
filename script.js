var gameInput = $("#bot-input");
var gameOutput  = $("#bot-output");
gameInput.keydown(function(keydownEvent) {  
  // the key code for enter is 13
  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    gameInput.val("");
  }  
})

function parseText(text) {    
  if (text === "Good bye") {
    gameOutput.html("SEE YA!");
  }else if (text==="what is your name?") {
    gameOutput.html("All powerful hot dog Bot")
  } else if (text === "robot come out!") {
    gameOutput.html("NEVER")
  } else if (text ==="move") {
    gameOutput.animate({top: 500});
  }
}

