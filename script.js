var questions = [
    {
        statement: "what does Defer do?",
        choices: [
            "change when an src is loaded",
            "initialise a function after it would otherwise be called",
            "allows you to later specify when text is displayed",
            "increase fontsize",
        ],
        answer: "change when an src is loaded"
        // ^string. 
    },
    {
        statement: "Which one of these is a JavaScript package manager?",
        choices: [
            "Node.js",
            "TypeScript",
            "npm",
            "HTML",
        ],
        answer: "npm",
    }

];




var questionContainer = $(".questionContainer")

var timerEl = $(".timer")

var startEl = $("#start")
var gamestate = {
    currentTimeLeft: 10,
    currentIndex: 0,
    score: 0,
    hasEnded: false
}

function startTimer() {
    var timeInterval = setInterval(function () {
        gamestate.currentTimeLeft--;
        timerEl.text(gamestate.currentTimeLeft)

        if (gamestate.currentTimeLeft <= 0) {
            clearInterval(timeInterval);
            timerEl.text("T!m3 = ↑")
            endgame()
        }
    }, 1000)
}


// start timer, set qu for index. 
function startGame() {
    timerEl.empty()
    startTimer()
    buildQuestion(gamestate.currentIndex)
}


function buildQuestion(questionIndex) {
    var question = questions[questionIndex]
    // clear qucontainer
    questionContainer.empty()
    // question statement
    var questionTitle = $("<p>")

    questionTitle.text(question.statement)

    questionContainer.append(questionTitle)
    // btnchoice1
    for (let i = 0; i < questions[questionIndex].choices.length; i++) {
        const choice = questions[questionIndex].choices[i];
        console.log(choice);
        var btnChoice = $("<button>")
        btnChoice.text(choice);
        btnChoice.addClass('btn-choices');
        btnChoice.attr('data-is-correct', choice === questions[questionIndex].answer);
        questionContainer.append(btnChoice);
    }
}

$('body').on('click', '.btn-choices', function (event) {
    next(JSON.parse(event.target.dataset.isCorrect))
});

// next - 
function next(isCorrect) {
    if (isCorrect) {
        gamestate.score++;
    } else {
        gamestate.currentTimeLeft = gamestate.currentTimeLeft - 5;
    }
    // Check if we have reach the end of the questions and if so show end game screen
    if ((questions.length - 1) === gamestate.currentIndex) {
        console.log('end of game');
        endgame()
    } else {
        gamestate.currentIndex = gamestate.currentIndex + 1;
        console.log(gamestate.currentIndex);
        buildQuestion(gamestate.currentIndex);
    }
}

// endgame screen

function endgame() {

    if (!gamestate.hasEnded) {
        gamestate.hasEnded = true
        // Clear container
        questionContainer.empty();

        // initals
        var initials = $("<input>")

        // save initials
        var saveIn = $("<button>")
        saveIn.text('Save')
        saveIn.click(function() {
            localStorage.setItem('initials', initials.val());
        })

        // restart game
        var restartGame = $("<button>")
        restartGame.text('Restart')
        restartGame.click(function() {
            startGame();
        })

        // score
        var scorebox = $("<p>")
        scorebox.text(gamestate.score)

        // append to container
        questionContainer.append(scorebox, initials, saveIn, restartGame);

        // update saved score
        setscore(gamestate.score)
    }
}

function getscore() {
    var previousScores = localStorage.getItem("score")
    if (!previousScores) {
        return []

    }
    return JSON.parse(previousScores)
}

function setscore(latestScore) {
    localStorage.setItem("score", JSON.stringify(latestScore));
}

startEl.on("click", startGame)

// Functions
// start (get us the first question and start the timer)
// next (which gets called everytime a question is answered, this will check if the answer is right or wrong, depending on each situation will may update the score/time remaining)
// buildQuestion(questionIndex)
// State
// gamestate (store our currentTimeOff), current qu index. 
// Conditionals
// The game will end in two different scenarios which are out of time or answered all  of the questions.




