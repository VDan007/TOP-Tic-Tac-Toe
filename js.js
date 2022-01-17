(function addEventListeners(){ 
    const area = Array.from(document.querySelectorAll(".area"));
    area.forEach(a=>a.addEventListener("click",addPlayerMark));
    const reset = document.querySelector("#reset");
    function reload(){
        window.location.reload();
    }
    reset.addEventListener("click",reload);
    })();

function announceWinner (whoWon) {
    const resultBoard = document.querySelector("#result");   
    const text = document.createElement("h1");
    if(whoWon == "x"){
        text.textContent = "The winner is X!";
        resultBoard.append(text);
        const area = Array.from(document.querySelectorAll(".area"));
        area.forEach(a=>a.removeEventListener("click",addPlayerMark));

    }else if(whoWon == "o"){
        text.textContent = "The winner is O!";
        resultBoard.append(text);
        const area = Array.from(document.querySelectorAll(".area"));
        area.forEach(a=>a.removeEventListener("click",addPlayerMark));
    }else if(whoWon == "xo"){
        text.textContent = "It is a draw...";
        resultBoard.append(text);
        const area = Array.from(document.querySelectorAll(".area"));
        area.forEach(a=>a.removeEventListener("click",addPlayerMark));
    }  
}    

function howsTheGame (){
const area1 = document.querySelector("#area1");
const area2 = document.querySelector("#area2");
const area3 = document.querySelector("#area3");
const area4 = document.querySelector("#area4");
const area5 = document.querySelector("#area5");
const area6 = document.querySelector("#area6");
const area7 = document.querySelector("#area7");
const area8 = document.querySelector("#area8");
const area9 = document.querySelector("#area9");

(function draw(){
    if(area1.textContent&&area2.textContent&&area3.textContent&&
        area4.textContent&&area5.textContent&&area6.textContent&&
        area7.textContent&&area8.textContent&&area9.textContent){
          announceWinner("xo");  
      }
})();

(function firstRC(){
    if(area1.textContent&&area2.textContent&&area3.textContent){
        if(area1.textContent=="X"&&area2.textContent=="X"&&area3.textContent=="X"){announceWinner("x");
       }else if (area1.textContent=="O"&&area2.textContent=="O"&&area3.textContent=="O"){announceWinner("o");}
    }
})();

(function secondRC(){
    if(area4.textContent&&area5.textContent&&area6.textContent){
        if(area4.textContent=="X"&&area5.textContent=="X"&&area6.textContent=="X"){announceWinner("x");
       }else if (area4.textContent=="O"&&area5.textContent=="O"&&area6.textContent=="O"){announceWinner("o") ;}
    }
})();

(function thirdRC(){
    if(area7.textContent&&area8.textContent&&area9.textContent){
        if(area7.textContent=="X"&&area8.textContent=="X"&&area9.textContent=="X"){announceWinner("x");
       }else if (area7.textContent=="O"&&area8.textContent=="O"&&area9.textContent=="O"){announceWinner("o");}
    }
})();

(function firstCC(){
    if(area1.textContent&&area4.textContent&&area7.textContent){
        if(area1.textContent=="X"&&area4.textContent=="X"&&area7.textContent=="X"){announceWinner("x");
       }else if (area1.textContent=="O"&&area4.textContent=="O"&&area7.textContent=="O"){announceWinner("o");}
    }
})();

(function secondCC(){
    if(area2.textContent&&area5.textContent&&area8.textContent){
        if(area2.textContent=="X"&&area5.textContent=="X"&&area8.textContent=="X"){announceWinner("x");
       }else if (area2.textContent=="O"&&area5.textContent=="O"&&area8.textContent=="O"){announceWinner("o");}
    }
})();

(function thirdCC(){
    if(area3.textContent&&area6.textContent&&area9.textContent){
        if(area3.textContent=="X"&&area6.textContent=="X"&&area9.textContent=="X"){announceWinner("x");
       }else if (area3.textContent=="O"&&area6.textContent=="O"&&area9.textContent=="O"){announceWinner("o");}
    }
})();

(function xrow1C(){
    if(area1.textContent&&area5.textContent&&area9.textContent){
        if(area1.textContent=="X"&&area5.textContent=="X"&&area9.textContent=="X"){announceWinner("x");
       }else if (area1.textContent=="O"&&area5.textContent=="O"&&area9.textContent=="O"){announceWinner("o");}
    }
})();

(function xrow2C(){
    if(area3.textContent&&area5.textContent&&area7.textContent){
        if(area3.textContent=="X"&&area5.textContent=="X"&&area7.textContent=="X"){announceWinner("x");
       }else if (area3.textContent=="O"&&area5.textContent=="O"&&area7.textContent=="O"){announceWinner("o");}
    }
})();


};


function addPlayerMark(){
    let wichPlayer = 0;
    let whoIsNext = Array.from(document.querySelectorAll(".count"));
    
    if(whoIsNext.length % 2 == 0){wichPlayer=0;
    }else{wichPlayer = 1;}
    const x = document.createElement("h1");
    x.classList.add("count");
    if(wichPlayer == 0){ 
    x.textContent = "X";
    }
    else if (wichPlayer == 1){
    x.textContent = "O";    
    }

    this.appendChild(x);
    this.removeEventListener("click",addPlayerMark);
    this.classList.add("clicked");
    howsTheGame();
};





