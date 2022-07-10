let score = 0
let guest = 0

let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function add1(){
    score = score + 1
    homeEl.textContent = score
  
}

function add2(){
    score = score + 2
    homeEl.textContent = score
    
}

function add3(){
    score = score + 3
    homeEl.textContent = score
   
}

function add1G(){
    guest = guest + 1
    guestEl.textContent = guest
    
}

function add2G(){
    guest = guest + 2
    guestEl.textContent = guest
  
}

function add3G(){
    guest = guest + 3
    guestEl.textContent = guest
    
}