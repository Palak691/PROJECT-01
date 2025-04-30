let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true; //playerX, playerO

// 1-D array
// let arr = ["apple","banana","litchi"];
// 2-D array - are arrays of array132
// let arr2 = [["apple","litchi"],["potatos","mushroom"],["pants","shirts"]];

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
// reset button
const resetGame = () => {
       turnO = true;
       enabledBoxes();
       msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button is clicked");
    if (turnO === true) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerXs
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

// disable boxes
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
}
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";//clear X and O from box
       
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

}
  const checkWinner = () => {
    for (let pattern of winPatterns) {
      console.log(pattern[0], pattern[1], pattern[2]);
    //  
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText
    //   );
      let pos1Val = boxes[pattern[0]].innerText;//boxes[0].innerText
      //Yani box 0 ke andar kya likha hai? Uski value ko pos1Val mein store karo.
      let pos2Val = boxes[pattern[1]].innerText;//boxes[1].innerText
      let pos3Val = boxes[pattern[2]].innerText;//boxes[2].innerText

      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner", pos1Val);
            showWinner(pos1Val);
          
        }
      }

    }
  };

  newGamebtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click", resetGame);

