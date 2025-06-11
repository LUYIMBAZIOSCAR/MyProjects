const prompt = require("prompt-sync")();

// loads the prompt module and grants its access
console.log("Welcome to the Computer Hardware Quiz");
let correctAnswers = 0;

 const answer1 = prompt("What is the brain of the computer?: ");
 const correct_answer1 = "CPU";
 const totalQuestions = 4
 
 if(answer1.toUpperCase() === correct_answer1){
    console.log("You got it correct");
    correctAnswers++;
 }else{
    console.log("You got it wrong")
 }
const answer2 = prompt("What is used for storing data in memory?: ");
 const correct_answer2 = "HARD DISK";
 if(answer2.toUpperCase() === correct_answer2){
    console.log("You got it correct");
    correctAnswers++;
 }else{
    console.log("You got it wrong")
 }
 const answer3 = prompt("What is used for scrolling?: ");
 const correct_answer3 = "MOUSE";
 if(answer3.toUpperCase() === correct_answer3){
    console.log("You got it correct");
    correctAnswers++;
 }else{
    console.log("You got it wrong")
 }
 const answer4 = prompt("What is RAM in full?: ");
 const correct_answer4 = "RANDOM ACCESS MEMORY";
 if(answer4.toUpperCase() === correct_answer4){
    console.log("You got it correct");
    correctAnswers++;
 }else{
    console.log("You got it wrong")
 }
 const percent = Math.floor((correctAnswers/totalQuestions) * 100)
 console.log(`You have ${correctAnswers} correct answers `);
 console.log(`You scored ${percent}%`);
 

