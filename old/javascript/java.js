var HighScores = JSON.parse(localStorage.getItem("HighScores")) || [];
var start = document.querySelector("#start");
var choosenQu;
var timeLeft;
var scoreText = document.getElementById("Score");
var questionarray = [
    {
        question: "what does Defer do?",

        choice1: "change when an src is loaded",
        choice2: "initialise a function after it would otherwise be called",
        choice3: "allows you to later specify when text is displayed",
        choice4: "increase fontsize",
        answer: "change when an src is loaded"
        // ^string. 
    },
    {
        question: "Which one of these is a JavaScript package manager?",

        choice1: "Node.js",
        choice2: "TypeScript",
        choice3: "npm",
        choice4: "HTML",
        answer: "npm",





    }

];
var questionsAns = [

];

// console.log(questionarray[0].answer)

var rootEl = $('#root');

var startEl = $('<button>');

startEl.text('Start');

startEl.attr("id", "start");

rootEl.append(startEl)

var counterEl = $("<h1>")

counterEl.attr("id", "countdown");

rootEl.append(counterEl)

var timerEl = document.getElementById('countdown');


// start game and timer reveals 1st qu

document.getElementById("start").onclick = StartGame;
var QuPrompt = $('<h1>');
var btn1El = $('<button>');
   var btn2El = $('<button>');
   var btn3El = $('<button>');
   var btn4El = $('<button>');


function StartGame() {

    startEl.hide()
    var Score = $('<h2>');
    Score.attr("id", "Score");
    Score.text("your score is");
    console.log(Score.text)
    rootEl.append(Score)


    timeLeft = 30;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "5u9er Aw35om3 M_egA C0d1_Ng t35_t, Y0_u ha<3 " + timeLeft + " L3f*!T";

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "T!m3 = ↑";

        }
    }, 1000)
    question()
};


function rdmGen() {
    var randomQu = Math.floor(Math.random() * questionarray.length);
    choosenQu = randomQu
}

function clear() {
    console.log("steven")
    QuPrompt.remove()    
    btn1El.remove()
    btn2El.remove()
    btn3El.remove()
    btn4El.remove()
}

// document.getElementById("yesBtn").onclick = yes
// function yes() {
//     preventDefault();
    
// }
        
   
// document.getElementById("noBtn").onclick = no 

// function no() {
    
        
        
// }

incrementScore = num => {
    Score +=num;
    scoreText.innerText = Score;
}

// function that takes index of Qu, and answer provided. e.g choice. then increment and +/- from score. 


// choose random question

// console.log(rdmGen,)

function question() {
    
    rdmGen()
    
   while(questionsAns.includes(choosenQu) && questionarray.length > questionsAns.length){
       rdmGen()
   } 
   if (questionarray.length == questionsAns.length ){
       console.log("yabadabado") 
       clear()
       timerEl.remove()
    
    var endof = $('<h1>');
    endof.attr("id", "final");
    endof.text("End of Quizz! your score was")
    rootEl.append(endof)
    var saveScore = $('<h2>');
    saveScore.attr("id", "scoreCard");
    saveScore.text("Do you want to save your score")
    rootEl.append(saveScore)
    var saveYes = $('<button>');
   var saveNo = $('<button>');
   saveYes.attr("id", "yesBtn");
    saveYes.text("Yes")
    rootEl.append(saveYes)
    saveNo.attr("id", "noBtn");
    saveNo.text("No")
    rootEl.append(saveNo)
    return
    yes()
    no()

   } 
   
   
   questionsAns.push(choosenQu)
   
   console.log(choosenQu, questionarray[choosenQu]);
   
   console.log(questionsAns)
   
   
   
    QuPrompt.attr("id", "prompt");
    QuPrompt.text(questionarray[choosenQu].question)
    rootEl.append(QuPrompt)
    
    btn1El.text(questionarray[choosenQu].choice1);
    // console.log(questionarray[choosenQu].answer)
    // console.log(questionarray[choosenQu].choice1)
    btn1El.attr("id", "btn1");
    btn1El.attr("class", "btn");
    rootEl.append(btn1El)
    
    btn2El.attr("id", "btn2");
    btn2El.attr("class", "btn");
    btn2El.text(questionarray[choosenQu].choice2);
    rootEl.append(btn2El)
    
    
    btn3El.attr("id", "btn3");
    btn3El.attr("class", "btn");
    btn3El.text(questionarray[choosenQu].choice3);
    console.log(questionarray[choosenQu].choice3)
    rootEl.append(btn3El)
    
    
    
    
    btn4El.attr("id", "btn4");
    btn4El.attr("class", "btn");
    btn4El.text(questionarray[choosenQu].choice4);
    console.log(questionarray[choosenQu].choice4)
    rootEl.append(btn4El)
    
    

    // console.log(questionarray[choosenQu].answer)
    
    document.getElementById("btn1").onclick = log
    
    function log() {
        console.log(questionarray[choosenQu].choice1)
        if (questionarray[choosenQu].choice1 === questionarray[choosenQu].answer) {
         
incrementScore = num => {
    Score +=num;
    // scoreText.innerText = Score;
}

            window.alert("correct")
            timeLeft = timeLeft + 5;
            // incrementScore(1);
            clear();
            question()
            
            
            
        }
        else {
            window.alert("incorrect")
            timeLeft = timeLeft - 5;
            clear()
            question()
            
        }
    }
    
    document.getElementById("btn2").onclick = log2
    
    function log2() {
        console.log(questionarray[choosenQu].choice2)
        if (questionarray[choosenQu].choice2 === questionarray[choosenQu].answer) {
            window.alert("correct")
            timeLeft = timeLeft + 5;
            clear()
            question()
            
        } else {
            window.alert("incorrect")
            timeLeft = timeLeft - 5;
            clear()
            question()
            
        }
    }
    
    document.getElementById("btn3").onclick = log3
    
    function log3() {
        console.log(questionarray[choosenQu].choice3)
        if (questionarray[choosenQu].choice3 === questionarray[choosenQu].answer) {
            window.alert("correct")
            timeLeft = timeLeft + 5;
            clear()
            question()
            
            
        } else {
            window.alert("incorrect")
            timeLeft = timeLeft - 5;
            clear()
            question()
        }
    }
    
    document.getElementById("btn4").onclick = log4
    
    function log4() {
        console.log(questionarray[choosenQu].choice4)
        if (questionarray[choosenQu].choice4 === questionarray[choosenQu].answer) {
            window.alert("correct")
            timeLeft = timeLeft + 5;
            clear()
            question()
            
            
        } else {
            window.alert("incorrect")
            timeLeft = timeLeft - 5;
            clear()
            question()
            
        }
    }
}



// function chooseAnother(questionarray) {
//     questionarray.slice(questionsAns)
//     var test = questionarray.slice(questionsAns)
    
// }

// function secondQu() {
    
// }
// function repititionPrevention() {
//     if (questionsAns.includes(choosenQu)) {

//         rdmGen
//         question()

        
//     } else {
//         question()
        
//     }
// }
// repititionPrevention()