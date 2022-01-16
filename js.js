
function howsTheGame (){
const area1 = document.querySelector("#area1");
const area2 = document.querySelector("#area2");
const area3 = document.querySelector("#area3");


//if(area1.firstChild.textContent == "X"&&
   if(area1.textContent){console.log("j==");}

};


function addPlayerMark(){
    let wichPlayer = 0;
    let whoIsNext = Array.from(document.querySelectorAll(".count"));
    console.log(whoIsNext);
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
    
}




const area = Array.from(document.querySelectorAll(".area"));
area.forEach(a=>a.addEventListener("click",addPlayerMark));

