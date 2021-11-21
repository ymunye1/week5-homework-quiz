var QandApile= [
    {
         question : 'Commonly used data types DO NOT include?',
         choice : ['Strings', 'Booleans','Alerts', 'Numbers'],
         answer : 'alerts'
    },
    {
         question : ' The condition in an if / else statement is enclosed within ____.',
         choice : ['Quotes', 'Curly brackets', 'Parentheses', 'Square brackets'],
         answer : 'parentheses'
    },
    {
         question : ' Arrays in JavaScript can be used to store ____.',
         choice: ['numbers and strings', 'other arrays', 'booleans', 'All of the above'],
         answer : 'All of the above'
    },
    {
         question : 'String values must be enclosed within ____ when being assigned to variables. ',
         choice : ['commas', 'curly brackets', 'quotes', 'parentheses'],
         answer : 'quotes'
    },
    {
         question : 'A very useful tool used during development and debugging for printing content to the debugger is:',
         choice : ['JavaScript','terminal / bash', 'for loops','console.log'],
         answer : 'console.log'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var choice0= document.getElementById('choice0');
var choice1= document.getElementById('choice1');
var choice2= document.getElementById('choice2');
var choice3= document.getElementById('choice3');
var span= document.querySelector('span');

var i=0
var score = 0;

function showQuestion(){
     for(var y=0; i<span.length; y++){
          span[a].style.background='none';
     }
     question.innerHTML= 'Q.'+(i+1)+' '+QandApile [i].question;
     choice0.innerHTML= QandApile [i].choice[0];
     choice1.innerHTML= QandApile [i].choice[1];
     choice2.innerHTML= QandApile[i].choice[2];
     choice3. innerHTML= QandApile[i].choice[3];
     stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+QandApile.length;
}
showQuestion()