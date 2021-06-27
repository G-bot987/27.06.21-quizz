var start = document.querySelector("#start");
var test;
var questionarray = [
    {
        question: "what does Defer do?",

        choice1: "change when an src is loaded",
        choice2: "initialise a function after it would otherwise be called",
        choice3: "allows you to later specify when text is displayed",
        choice4: "increase fontsize",
        answer: "1"
        // ^string. 
    },
    {
        question: "Which one of these is a JavaScript package manager?",

        choice1: "Node.js",
        choice2: "TypeScript",
        choice3: "npm",
        choice4: "HTML",
        answer: 3





    }

];

console.log(questionarray[0].answer)

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


function StartGame() {

    startEl.hide()


    var timeLeft = 30;
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
    test = randomQu
}


// choose random question
// console.log(randomQu, questionarray[randomQu]);
// console.log(rdmGen,)

function question() {

    rdmGen()

    var QuPrompt = $('<h1>');
    QuPrompt.attr("id", "prompt");
    QuPrompt.text(questionarray[test].question)
    rootEl.append(QuPrompt)

    var btn1El = $('<button>');
    btn1El.text(questionarray[test].choice1);
    // console.log(questionarray[test].answer)
    // console.log(questionarray[test].choice1)
    btn1El.attr("id", "btn1");
    btn1El.attr("class", "btn");
    rootEl.append(btn1El)

    var btn2El = $('<button>');
    btn2El.attr("id", "btn2");
    btn2El.attr("class", "btn");
    btn2El.text(questionarray[test].choice2);
    rootEl.append(btn2El)


    var btn3El = $('<button>');
    btn3El.attr("id", "btn3");
    btn3El.attr("class", "btn");
    btn3El.text(questionarray[test].choice3);
    console.log(questionarray[test].choice3)
    rootEl.append(btn3El)




    var btn4El = $('<button>');
    btn4El.attr("id", "btn4");
    btn4El.attr("class", "btn");
    btn4El.text(questionarray[test].choice4);
    console.log(questionarray[test].choice4)
    rootEl.append(btn4El)

    


    
    document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', event => {
            console.log("hello")
        })
      })
}


function quAns() {

    console.log("hello")
}



    // btn2El.click(congrats)
    // function showQuestion(questionarray) {
    //     QuBox.innerText = question.question


    // }




    // 