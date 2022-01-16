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
}




const area = Array.from(document.querySelectorAll(".area"));
area.forEach(a=>a.addEventListener("click",addPlayerMark));