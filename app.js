let boxes=document.querySelectorAll(".button");
let reset=document.querySelector(".reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let drwa=document.querySelector(".draw");
let turn0=true;
let count=0;
const winpattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetGme=()=>{
    turn0=true;
    count=0;
eenabled()
drwa.classList.add("hide");
  
    msgcontainer.classList.add("hide");

};

boxes.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("clicked");
        count=count+1;
        console.log(count); 
        if(count===9){
            console.log("draw");
            drwa.classList.remove("hide");

        }
        if(turn0){
            button.innerText="0";
            turn0=false;
            

            
        }
        else{
            button.innerText="x";
            turn0=true;
    
        }
        
        button.disabled=true;
        winner();
    });
}); 

const ddisabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const eenabled=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
}
const showWinner=(winner)=>{
    msg.innerText=`CONGRATULATIONS WINNER IS: ${winner} `;
    msgcontainer.classList.remove("hide");
ddisabled();
};

const winner=()=>{

    for( let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                let winner=console.log("winner");

                showWinner(pos1);
               
               
              
                
            }
        }
    }
}

newgamebtn.addEventListener("click", resetGme);
reset.addEventListener("click", resetGme);

