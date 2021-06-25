var timerEl = document.getElementById('countdown');

var start = document.querySelector("#start");

document.getElementById("start").onclick = countdown;
    function countdown() {
        var timeLeft = 30;
        var timeInterval = setInterval (function() {
            timeLeft--;
                      timerEl.textContent = "5u9er Aw35om3 M_egA C0d1_Ng t35_t, Y0_u ha<3 " +  timeLeft + " L3f*!T";
                  
                      if( timeLeft === 0) {
                        clearInterval(timeInterval);
                        timerEl.textContent = "T!m3 = ↑";
                  
                      }  
        },1000 )
    }; 