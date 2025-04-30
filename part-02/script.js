let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let startbtn = document.querySelector("#start-btn");


let turnO = true;

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
 console.log("button is clicked")
 if(turnO){
   box.innerText = "O"
   turnO = false;
 }else{
  box.innerText = "X";
  turnO = true;
 }
 box.disabled = true
 checkWinner();
})
})

//checkWinner()
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let checkWinner = (()=>{
  for(let patteren of winPatterns){
    let pos1Val = boxes[patteren[0]].innerText;
    let pos2Val = boxes[patteren[1]].innerText;
    let pos3Val = boxes[patteren[2]].innerText;
    if(pos1Val!==""&& pos2Val!==""&& pos3Val!==""){
      if(pos1Val===pos3Val&& pos2Val===pos3Val){
        console.log("winner", pos1Val)
    showWinner(pos1Val);

      }
    }
   
  }
})

let showWinner = (pos1Val)=>{
 msg.innerText = `WINNER is ${pos1Val}`;
 disabledBoxes()

}
//disabledboxes

let disabledBoxes = ()=>{
 for(let box of boxes){
  box.disabled = true;
  box.innerText = "";
 }
}

let enabledBoxes = ()=>{
 for(let box of boxes){

  box.disabled = false;
  box.innerText = ""
 }
}
let resetButton = ()=>{
  turnO = true;
  enabledBoxes();

}

resetBtn.addEventListener("click",resetButton);
startbtn.addEventListener("click",resetButton)

