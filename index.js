var readlineSync=require("readline-sync");
var ownerOfQuiz="Play the Quiz! (marvel-superheroes) ";
console.log(ownerOfQuiz);
console.log("--------")
var score=0;
var userAnswer=readlineSync.question("Enter Your Name start Quiz? ");
console.log("welcome! "+userAnswer+" ,let me know how well you know marvel superheroes? ");
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("your right!");
    score=score+1;
  }else{
    console.log("your wrong!");
    score=score-1;
  }
  console.log("your score is:"+score);
  console.log("--------------")
}
var question=[{
  question:"1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\na.2005\nb.2008\nc.2010\nd.2012\n ", 
  answer:"b"
},{
  question:"2.What is the name of Thor’s hammer?\na.Vanir\nb.Mjolnir\nc.Aesir\nd.Norn\n ",
  answer:"b"
},{
   question:"3.Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?\na.Thor\nb.Loki\nc.The Collector\nd.Tony Stark\n ",
   answer:"b"
},{
  question:"4.Who does the Mad Titan sacrifice to acquire the Soul Stone?\na.Nebula\nb.Ebony Maw\nc.Cull Obsidian\nd.Gamora\n ",
   answer:"d"
},{
  question:" 5.What song does Baby Groot dance to at the end of the first Guardian of the Galaxy?\na.Cherry Bomb’ – The Runaways\nb.‘Ain’t No Mountain High Enough’ – Marvin Gaye & Tammi Terrell\nc.‘I Want You Back’ – The Jackson 5\nd.‘Hooked On A Feeling’ – Voidoid\n ",
  answer:"c"
}]
for(j=0;j<question.length;j=j+1){
  var currentQuestion=question[j];
  play(currentQuestion.question,currentQuestion.answer)
}
var myQuiz=[{
  name:"Sai",
  highScore:"4"
}]
console.log("My current high scores for quiz beaten,Congratulations")
for(i=0;i<myQuiz.length;i=i+1){
  var currentHighScore=myQuiz[i];
  console.log(currentHighScore.name,currentHighScore.highScore);
  if(currentHighScore.highScore<score===true){
    console.log(userAnswer+" sent me your score you beaten highscores to update my quiz and welcome you qualified level one")
  console.log("let's start 2nd level...")
  var question=[{
    question:"Who killed Tony Stark’s parents? ",
    answer:"the winter soldeir"
  },{
    question:" What species is Loki revealed to be? ",
    answer:"Frost Giant"
  },{
    question:"What is the name of the microscopic universe Ant-Man travels to when he goes sub-atomic? ",
    answer:"Quantum Realm"
  },{
    question:"In which film’s post-credit scene did Thanos first appear? ",
    answer:"The Avengers"
  },{
    question:"Which of the infinity stones is hidden on Vormir? ",
    answer:"Soul Stone"
  }];
  for(i=0;i<question.length;i=i+1){
  var firstLevel=question[i];
  play(firstLevel.question,firstLevel.answer);
  }
  }else{
    console.log("you are not beaten highscore!")
  }
}
console.log("hey! "+userAnswer+" ,your final score is: "+score);
console.log(userAnswer+" ,Thanks for Participating.Hope you Enjoyed It...")
