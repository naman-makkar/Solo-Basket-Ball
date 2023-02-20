// Left
let scoreBoard = document.getElementById("scoreleft")
let btn1 = document.getElementById("btn1Left")

let score = 0

function add1left() {
	score +=1
	scoreBoard.textContent = score
}

function add2left() {
	score +=2
	scoreBoard.textContent = score
}

function add3left() {
	score +=3
	scoreBoard.textContent = score
}

// Right

let scoreBoardRight = document.getElementById("scoreright")
let btn2 = document.getElementById("btn1Right")

let scoreR = 0

function add1right() {
	scoreR +=1
	scoreBoardRight.textContent = scoreR
}

function add2right() {
	scoreR +=2
	scoreBoardRight.textContent = scoreR
}

function add3right() {
	scoreR +=3
	scoreBoardRight.textContent = scoreR
}