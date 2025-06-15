// creating a variable for the user's answer

const answer1 = prompt(`What is the highest mountain in Africa?:  `)
 const correctAnswer1 = "KILIMANJARO"
 let correctAnswers = 0;
 
if(answer1.toUpperCase() === correctAnswer1){
    
    
    alert(`You are right`)
    correctAnswer1++;
    
}else{
    alert(`Your answer is wrong`)
}
const answer2 = prompt(`How many days are in a week?:  `)
 const correctAnswer2 = "SEVEN"
if(answer2.toUpperCase() === correctAnswer2){
    
    
    alert(`You are right`)
    correctAnswers++;
}else{
    alert(`Your answer is wrong`)
}
const answer3 = prompt(`What is the capital city of Uganda?:  `)
 const correctAnswer3 = "KAMPALA"
if(answer3.toUpperCase() === correctAnswer3){
    
    
    alert(`You are right`)
    correctAnswers++;
}else{
    alert(`Your answer is wrong`)
}
const answer4 = prompt(`What is the source of the Nile?:  `)
 const correctAnswer4 = "LAKE VICTORIA"
if(answer4.toUpperCase() === correctAnswer4){
    
    
    alert(`You are right`)
    correctAnswers++;
}else{
    alert(`Your answer is wrong`)
}
const answer5 = prompt(`What is the best university in Uganda?:  `)
 const correctAnswer5 = "MAKERERE"
if(answer5.toUpperCase() === correctAnswer5){
    
    
    alert(`You are right`)
    correctAnswers++;
}else{
    alert(`Your answer is wrong`)
}

const answer6 = prompt(`Who is the president of Uganda?:  `)
 const correctAnswer6 = "BOBI WINE"

 
if(answer6.toUpperCase() === correctAnswer6){
    
    
    alert(`You are right`)
    correctAnswer1++;
    
}else{
    alert(`Your answer is wrong`)
}


alert(`You have got ${correctAnswers} answers right`);
let totalanswers = 5;
let percent = (correctAnswers/totalanswers) * 100;
alert(`You have got ${percent}%`);


