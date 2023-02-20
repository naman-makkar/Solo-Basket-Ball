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
	score +=1
	scoreBoardRight.textContent = score
}

function add2right() {
	score +=2
	scoreBoardRight.textContent = score
}

function add3right() {
	score +=3
	scoreBoardRight.textContent = score
}