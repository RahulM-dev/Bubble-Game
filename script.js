let str = "";
let score = 0;
let counter = 60;
setTimer();
buttonLoad();
mainFunction();
function mainFunction() {
    document.querySelector(".all-btns").addEventListener("click", (e) => {
        let hit = document.getElementById("hit").value;
        if (Number(hit) == Number(e.target.textContent)) {
            scoreUpdate();
        }
        buttonLoad();
    })
}
function setTimer() {
    let timeout = setInterval(() => {
        document.getElementById("timer").value = counter;

        if (counter == 0) {
            clearInterval(timeout);
            let val = document.getElementById("score").value;
            gameOver(val);
        }
        counter--;
    }, 1000)

}
function buttonLoad() {
    document.getElementById("hit").value = Math.floor(Math.random() * 10);
    for (let i = 0; i < 112; i++) {
        str += `<button class="btn">${Math.floor(Math.random() * 10)}</button>`;
    }
    document.getElementsByClassName("all-btns")[0].innerHTML = str;
    str = "";
}
function getPreviousHighest(score) {
    let arr = document.cookie.split(";");
    if (Number(arr[0]) < score) {
        document.cookie = score;
    }
    return arr[0];
}
function gameOver(val) {

    document.querySelector(".all-btns").innerHTML = `<div  id="final-message">
    <h1>Game Over!!!!!!!</h1><br>
    <div><h2>Your score is: ${val}</h2></div><br>
    <div><h2>Highest score: ${getPreviousHighest(score)}</h2></div>
    <div><button id="restart" onclick = "location.reload()">Restart</button></div>
    <div>`;

    //The line (55) is written because after the gameover is loaded still the eventlister is applied
    //to the page because of the class name. So the hit will be updated everytime we click anywhere in the
    //all-btn class area. So to to freeze the hit we changed the id of that "hit" textbox. So even if the
    //the eventListener will run it won't be able to update the hit because we changed the id through which 
    //the value has been accessed.
    document.getElementById("hit").id = "newHit";
}
function scoreUpdate() {
    score += 10;
    document.getElementById("score").value = score;
}


