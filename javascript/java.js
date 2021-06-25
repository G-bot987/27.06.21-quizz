var start = document.querySelector("#start");

// var Questions = [
    //     {
        //         question: "2+2",
        //         answers: [
            //             {text: "4", correct: true},
            //             {text: "22", correct: false},
            //         ]
            //     }
            
            // ];
            // var QuShuffle = Questions.sort(() => Math.random() - .5);
            
            // var QuBox = document.getElementById("question");
            // var AnsBtns = document.getElementById("answer-buttons");
            
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
        
        var btn1El = $('<button>');
            
            btn1El.text('answer 1');
            
            rootEl.append(btn1El)

            var btn2El = $('<button>');
            
            btn2El.text('answer 2');
            
            rootEl.append(btn2El)

            
            var btn3 = $('<button>');
            
            btn3.text('answer 2');
            
            rootEl.append(btn3)

            
            var btn3 = $('<button>');
            
            btn3.text('answer 2');
            
            rootEl.append(btn3)

        var timeLeft = 30;
        var timeInterval = setInterval (function() {
            timeLeft--;
                      timerEl.textContent = "5u9er Aw35om3 M_egA C0d1_Ng t35_t, Y0_u ha<3 " +  timeLeft + " L3f*!T";
                  
                      if( timeLeft === 0) {
                        clearInterval(timeInterval);
                        timerEl.textContent = "T!m3 = ↑";
                  
                      }  
        },1000 )
        // question()
    }; 

    // function question() {
    //     document.getElementById("btn1").innerHTML = "New text!";

    // }

    // function showQuestion(Questions) {
    //     QuBox.innerText = question.question


    // }




    // 