var choice = ["r","p","s"];
    
var win = 0;
var lose = 0;
var tie = 0;

var userInput = "";
var compIndex  = "";



document.addEventListener("keypress", function(event){
    userInput = event.key; 
    compIndex = Math.floor(Math.random() * choice.length);
    compInput = choice[compIndex];
        
    
    document.getElementById("compInput").textContent = compInput;  
   
    if(userInput === "s"){
        if(compInput === "s"){
            tie++;
            document.getElementById("addpointtie").textContent = tie;
        } 
        else if(compInput === "r"){
            lose++;
            document.getElementById("addpointlose").textContent = lose;
        }
        else if(compInput === "p"){
            win++;
            document.getElementById("addpointwin").textContent = win;
        }
    }

    if(userInput === "p"){
        if(compInput === "p"){
            tie++;
            document.getElementById("addpointtie").textContent = tie;
        }
        else if(compInput === "r"){
            win++;
            document.getElementById("addpointwin").textContent = win;
        }
        else if(compInput === "s"){
            lose++;
            document.getElementById("addpointlose").textContent = lose;
        }
    }

    if(userInput === "r"){
        if(compInput === "r"){
            tie++;
            document.getElementById("addpointtie").textContent = tie;
        }
        else if(compInput === "p"){
            lose++;
            document.getElementById("addpointlose").textContent = lose;
        }
        else if(compInput === "s"){
            win++;
            document.getElementById("addpointwin").textContent = win;
        }
    }
    });