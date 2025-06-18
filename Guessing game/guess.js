let randomNumber = Math.floor(Math.random() * 20) + 1;


let submit = document.getElementById("btn")
let response = document.getElementById("response");
let attempts = 0; 

submit.addEventListener("click",() => {
    
    attempts++;
    let userGuess = Number(document.getElementById("userguess").value);
    
    
    
    if (randomNumber === userGuess) {
        response.textContent = `You guessed right`
        
    }
    else if(userGuess < randomNumber){
        response.textContent = `You guessed too low`
        
    }else if(userGuess > randomNumber){
        response.textContent = `You guessed too high`;
        
        
    }
    
    
document.getElementById("attempt").textContent = `Attempts : ${attempts}`
})







