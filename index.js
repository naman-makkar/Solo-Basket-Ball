//Start
let startbutton = document.getElementById("start common")


// Left
let scoreBoard = document.getElementById("scoreleft")
let btn1 = document.getElementById("btn1Left")

let score = 0

// right variables
let scoreBoardRight = document.getElementById("scoreright")
let btn2 = document.getElementById("btn1Right")

// function work() {
// 	function add1left() {
// 		score +=1
// 		scoreBoard.textContent = score
// 	}

// 	function add2left() {
// 		score +=2
// 		scoreBoard.textContent = score
// 	}

// 	function add3left() {
// 		score +=3
// 		scoreBoard.textContent = score
// 	}

// 	// Right

// 	function add1right() {
// 		scoreR +=1
// 		scoreBoardRight.textContent = scoreR
// 	}

// 	function add2right() {
// 		scoreR +=2
// 		scoreBoardRight.textContent = scoreR
// 	}

// 	function add3right() {
// 		scoreR +=3
// 		scoreBoardRight.textContent = scoreR
// 	}
// }

// function start() {
// 	startbutton.disabled = true
// 	if (startbutton.disabled == true) {
// 		work()
// 	}
// }

let scoreR = 0

function scoreShadow() {
	if(score < scoreR){
        document.getElementById("scoreright").style.boxShadow = "0px 0px 100px blue"
        document.getElementById("scoreleft").style.boxShadow = "none"
        document.getElementById("scoreright").style.border = "1px solid lightblue"
        document.getElementById("scoreleft").style.border = "none"
    }  
    else if(scoreR < score){
        document.getElementById("scoreright").style.boxShadow = "none"
        document.getElementById("scoreleft").style.boxShadow = "0px 0px 20px lightblue"
        document.getElementById("scoreright").style.border = "none"
        document.getElementById("scoreleft").style.border = "1px solid lightblue"
    }
    else if(score === scoreR){
        document.getElementById("scoreright").style.boxShadow = "none"
        document.getElementById("scoreleft").style.boxShadow = "none"
        document.getElementById("scoreright").style.border = "none"
        document.getElementById("scoreleft").style.border = "none"
    }
}

function add1left() {
	score +=1
	scoreBoard.textContent = score
	scoreShadow()
}

function add2left() {
	score +=2
	scoreBoard.textContent = score
	scoreShadow()
}

function add3left() {
	score +=3
	scoreBoard.textContent = score
	scoreShadow()
}

// Right

function add1right() {
	scoreR +=1
	scoreBoardRight.textContent = scoreR
	scoreShadow()
}

function add2right() {
	scoreR +=2
	scoreBoardRight.textContent = scoreR
	scoreShadow()
}

function add3right() {
	scoreR +=3
	scoreBoardRight.textContent = scoreR
	scoreShadow()
}




// foul
let foulscoreLeft = document.getElementById("foulleft")
let foulCountLeft = 0

function minus1left() {
	foulCountLeft +=1
	foulscoreLeft.textContent = foulCountLeft
}

// foul right
let foulscoreRight = document.getElementById("foulright")
let foulCountRight = 0

function minus1right() {
	foulCountRight +=1
	foulscoreRight.textContent = foulCountRight
}

// Reset
let resetButton = document.getElementById("reset common")

function reset() {
	scoreR=0
	score=0
	foulCountLeft=0
	foulCountRight=0
	scoreBoardRight.textContent=scoreR
	scoreBoard.textContent=score
	foulscoreRight.textContent = foulCountRight
	foulscoreLeft.textContent = foulCountLeft
	
}