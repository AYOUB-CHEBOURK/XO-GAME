
let title = document.querySelector(".title");
let turn = "X";
let squire = [];
const all = (num1, num2, num3) =>{
    title.innerHTML = `${squire[num1]} Winner`;
    document.getElementById("item" + num1).style.backgroundColor = "blue";
    document.getElementById("item" + num2).style.backgroundColor = "blue";
    document.getElementById("item" + num3).style.backgroundColor = "blue";
    setInterval(function () { title.innerHTML += "."; }, 1000);
    setTimeout(function () { location.reload(); }, 3000);
}

const winner = () => {
    for (let i = 1; i < 10; i++) {
        squire[i] = document.getElementById("item" + i).innerHTML
    }
    if (squire[1] === squire[2] && squire[2] === squire[3] && squire[1] !== ""){ 
        all(1, 2, 3);
    }else if (squire[4] === squire[5] && squire[5] === squire[6] && squire[4] !== ""){
        all(4, 5, 6)  
    }else if (squire[7] === squire[8] && squire[8] === squire[9] && squire[7] !== ""){
        all(7, 8, 9)  
    }else if (squire[1] === squire[4] && squire[4] === squire[7] && squire[1] !== ""){
        all(1, 4, 7)  
    }else if (squire[2] === squire[5] && squire[5] === squire[8] && squire[2] !== ""){
        all(2, 5, 8)  
    }else if (squire[3] === squire[6] && squire[6] === squire[9] && squire[3] !== ""){
        all(3, 6, 9)  
    }else if (squire[1] === squire[5] && squire[5] === squire[9] && squire[1] !== ""){
        all(1, 5, 9)  
    }else if (squire[3] === squire[5] && squire[5] === squire[7] && squire[3] !== ""){
        all(3, 5, 7) 
    }
};

function game(id) {
    let element = document.getElementById(id);
    if(turn === "X" && element.innerHTML === ""){
        element.innerHTML = "X";
        turn = "O";
        title.innerHTML = "ROLE OF O";
    }else if(turn === "O" && element.innerHTML === ""){
        element.innerHTML = "O";
        turn = "X";
        title.innerHTML = "ROLE OF X";
    }
    winner();   
};



