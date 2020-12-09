var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I Know your Good Name please- ")
var score = 0; 


console.log("WELCOME " + userName + " TO DO YOU KNOW ARZOO :-) ");


//funtion 
function play (question,answer){
  
  var userAnswer = readlineSync.question(question);
       if (userAnswer.toLowerCase() === answer.toLowerCase())
       {
         console.log("you're absolutely correct ! " );
         score = score +1;
         console.log("you're score is " ,score);
       }else{
         console.log("oops! you're wrong");
         
       }
       console.log("****************************************");
}
//array
var questions =[{question : "Which is the movie I can watch over and over again ? ", answer :"pretty woman"},
{question : "what is my hobby ? " , answer :"Reading novels"},
{question : " what is the name of the series which instantly lift up my mood ? ", answer: "F.R.I.E.N.D.S"},
{question : "what would I do if I will be omnipotent for a day ? ",answer: " eat "},
{question : "what phobia do I have ? " , answer :"Acrophobia"}]




//loop
for(var i = 0; i < questions.length; i++)
{
  var currentQues = questions[i];
  play(currentQues.question,currentQues.answer)
  
}
console.log("VOILA!! YOU'RE FINAL SCORE IS : ",score);