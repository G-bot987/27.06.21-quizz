var start = document.querySelector("#start");

var Questions = [
        {
                question: "what does Defer do?",
                answers: [
                        {text: "change when an src is loaded", correct: true},
                        {text: "initialise a function after it would otherwise be called", correct: false},
                        {text: "allows you to later specify when text is displayed", correct: false},
                        {text: "increase fontsize", correct: false},
                    ]
                },
                {
                    question: "Which one of these is a JavaScript package manager?",
                    answers: [
                        {text: "Node.js", correct: false},
                        {text: "TypeScript", correct: false},
                        {text: "npm", correct: true},
                        {text: "HTML", correct: false},

                    ]
                    
                    
                  },
            
            ];
            
            var rootEl = $('#root');
            
            var startEl = $('<button>');
            
            startEl.text('Start');
            
            startEl.attr("id","start");
            
            rootEl.append(startEl)
            
            var counterEl = $("<h1>")
            
            counterEl.attr("id","countdown");
            
            rootEl.append(counterEl)
            
            var timerEl = document.getElementById('countdown');


            // start game and timer reveals 1st qu
            
            document.getElementById("start").onclick = StartGame;
            
            
            function StartGame() {
                
        startEl.hide()
        
       
        var timeLeft = 30;
        var timeInterval = setInterval (function() {
            timeLeft--;
                      timerEl.textContent = "5u9er Aw35om3 M_egA C0d1_Ng t35_t, Y0_u ha<3 " +  timeLeft + " L3f*!T";
                  
                      if( timeLeft === 0) {
                        clearInterval(timeInterval);
                        timerEl.textContent = "T!m3 = ↑";
                  
                      }  
        },1000 )
        question()
    }; 

   
   
// choose random question
var randomQu = Math.floor(Math.random() * Questions.length);
console.log(randomQu, Questions[randomQu]);

    function question(randomQu) {

        

        var QuPrompt = $('<h1>');
    
        QuPrompt.text(randomQu)
    
        rootEl.append(QuPrompt)

        var btn1El = $('<button>');
            
        btn1El.text('increase fontsize');
        
        rootEl.append(btn1El)

        var btn2El = $('<button>');
        
        btn2El.text('change when an src is loaded');
        
        rootEl.append(btn2El)

        
        var btn3 = $('<button>');
        
        btn3.text('initialise a function after it would otherwise be called.');
        
        rootEl.append(btn3)

        
        var btn4 = $('<button>');
        
        btn4.text('allows you to later specify when text is displayed');
        
        rootEl.append(btn4)
        
        
        btn2El.click(congrats)
        
        function congrats (){
            console.log("well done")
        }


    }

    // function showQuestion(Questions) {
    //     QuBox.innerText = question.question


    // }




    // 