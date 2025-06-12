const prompt = require("prompt-sync")();
const target = Math.floor(Math.random() * 10)
let guesses = 0;
while(true){
    guesses++;
const guess =   Number(prompt("Guesss the number: "));
console.log(guess);
if(guess > target){
    console.log(`Your guess is too high`);
}else if(guess < target) {
    console.log(`Your guess is too low`);
}else{
    console.log(`You guessed it`);
    break
}
}
console.log(`You guessed the number in ${guesses} tries`);