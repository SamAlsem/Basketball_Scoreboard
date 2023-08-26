homeScoreDisp = document.getElementById("homeScore");
guestScoreDisp = document.getElementById("guestScore");


let homeScore = 0
let guestScore = 0 

function addOneHome(){
    homeScore += 1
    homeScoreDisp.textContent = homeScore   
}

function addTwoHome(){
    homeScore += 2
    homeScoreDisp.textContent = homeScore   
}

function addThreeHome(){
    homeScore += 3
    homeScoreDisp.textContent = homeScore   
}

function addOneGuest(){
    guestScore += 1
    guestScoreDisp.textContent = guestScore   
}

function addTwoGuest(){
    guestScore += 2
    guestScoreDisp.textContent = guestScore   
}

function addThreeGuest(){
    guestScore += 3
    guestScoreDisp.textContent = guestScore   
}

function newGame(){
    homeScore = 0
    guestScore = 0
    homeScoreDisp.textContent = 0
    guestScoreDisp.textContent = 0
}