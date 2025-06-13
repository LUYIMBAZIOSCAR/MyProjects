let inputElement = document.getElementById("input");
let response = document.getElementById("response");
let button1 = document.getElementById("btn")
let button2 = document.getElementById("next");
let question = document.getElementById("question")
button1.onclick = function(){
  let inputValue1 = String(inputElement.value); 
let correctValue1 = "KAMPALA"
if(inputValue1.toUpperCase() === correctValue1 ){
    response.textContent = `You are right`

}
else{
response.textContent = ` You are wrong`
}
let inputValue2 = String(inputElement.value); 
let correctValue2 = "MUSEVENI"
if(inputValue2.toUpperCase() === correctValue2 ){
    response.textContent = `You are right`

}
else{
response.textContent = ` You are wrong`
}


}
button2.onclick = function(){
    question.textContent = `Who is the president of Uganda ?`
    inputElement.value = "";
} 
