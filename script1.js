let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-button")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnO = true;//player X,Player Y
let count = 0
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetGame = ()=>{
    turnO = true;
    count = 0
    enableBoxes();
    msgContainer.classList.add("hide")

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        
        if(turnO){
            box.innerText = "O"
            turnO = false
        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        count++

        let isWinner = checkwinner();

        if(count == 9 && !isWinner){
            gameDraw();
        }

    })

})
const gameDraw = () =>{
    msg.innerText = `game was a draw`;
    msg.container.classList.remove("hide");
    disableBoxes()
}
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const checkwinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
        if(pos1Value == pos2Value && pos2Value == pos3Value){
            console.log("winner",pos1Value)
            showWinner(pos1Value)
        }
    }
}
}

const showWinner = (winner)=>{
    msg.innerText = `congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableBoxes()
}

newGameBtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)


