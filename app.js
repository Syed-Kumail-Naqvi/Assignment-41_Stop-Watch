// Buttons from HTML to Javascript

let startbtn = document.getElementById("start");

let restbtn = document.getElementById("reset");

let stopbtn = document.getElementById("stop");

// Values of Stop Watch

let hour = 0 ;

let minute = 0 ;

let second = 0 ;

let count = 0 ;

// Start Button Function

startbtn.addEventListener ("click", function () {

    timer = true;
    stopwatch ();

})

// Reset Button Function

restbtn.addEventListener ("click", function () {

    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    // Taking Values From HTML of Stop Watch
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = ":00";
    document.getElementById("sec").innerHTML = ":00";
    document.getElementById("count").innerHTML = ":00";
})

// Stop Button Function 

stopbtn.addEventListener ("click", function () {

    timer = false
})

// Stop Watch Working Function

function stopwatch () {
    if (timer){
        count ++ ;

        if (count == 100){
            second ++ ;
            count = 0 ;
        }

        if (second == 60){
            minute ++ ;
            second = 0 ;
        }

        if (minute == 60){
            hour ++ ;
            minute = 0 ;
            second = 0 ;
        }

        // Yeh Conditions isliye lg rahi kiyu ke 0 se phle increment krwa rahe aik value nhi show krni 0 ke saath
        // show krna like "01" not like "1" 
        
        let hourNumber = hour ;
        let minNumber = minute ;
        let secNumber = second ;
        let countNumber = count ;

        if (hour < 10){
            hourNumber = "0" + hourNumber ;
        }

        if (minute < 10){
            minNumber = "0" + minNumber ;
        }

        if (second < 10){
            secNumber = "0" + secNumber ;
        }

        if (count < 10){
            countNumber = "0" + countNumber ;
        }

        // For Output

        document.getElementById("hr").innerHTML =  hourNumber ;
        document.getElementById("min").innerHTML = ":" + minNumber ;
        document.getElementById("sec").innerHTML = ":" + secNumber ;
        document.getElementById("count").innerHTML = ":" + countNumber ;
        setTimeout (stopwatch, 10);
    }

}


