let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let newgamebtn1 = document.querySelector("#new-btn1");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector("#msg-draw");
let msgcontainer1=document.querySelector(".msg-container1");
let turnO =  true;
let count = 0;

const winngpattran = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



const restgame = ()=>{
  turnO =  true;
  count=0;
  enableboxes();
  msgcontainer.classList.add("hide");
  msgcontainer1.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener(("click"),()=>{
      if (turnO){
        box.innerHTML = "O";
        turnO = false;
    
      }else{
        box.innerHTML="X";
        turnO=true;
      }
      
     box.disabled = true;
     count++;
     
     let iswinner = checkwinner();

     if(count ===9 && !iswinner){
      showdraw();
     }

     checkwinner();
    
    });
});


const showdraw = ()=>{
  draw.innerHTML =`Game draw`;
  msgcontainer1.classList.remove("hide");
  disabledboxes();
};


const disabledboxes =()=>{
  for (let box of boxes){
    box.disabled = true;
  }
};

const enableboxes =()=>{
  for (let box of boxes){
    box.disabled = false;
    box.innerHTML ="";
  }
};

const showwinner=(winner)=>{
 msg.innerHTML=`congratulation winner is ${winner}`;
 msgcontainer.classList.remove("hide");
 disabledboxes();
};


const checkwinner =()=>{
  for(pattern of winngpattran ){
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if (pos1val != "" && pos2val != "" && pos3val != ""){
      if(pos1val === pos2val && pos2val ===pos3val){
        showwinner(pos1val);
      }
    }

  }
};


resetbtn.addEventListener("click", restgame);
newgamebtn.addEventListener("click", restgame);
newgamebtn1.addEventListener("click",restgame);