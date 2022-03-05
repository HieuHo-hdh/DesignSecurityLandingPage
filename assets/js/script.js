// Show more description
function showMoreDescription() {
    var moreDescription = document.getElementById("home-description");
    var moreDescriptionButton = document.getElementById("home-description-button");
    moreDescription.style.display = "block";
    moreDescription.style.maxHeight = "unset";
    moreDescriptionButton.style.display = "none";
}

// Show 2 last cards - motivation cards
function showHiddenMotivationCard() {
    var reverseEngineering = document.getElementById("reverse-engineering");
    var manyMore = document.getElementById("many-more");
    var buttonMore = document.getElementById("button-more");
    reverseEngineering.style.display = "block";
    manyMore.style.display = "block";
    buttonMore.style.display = "none";
}

// OnClick => Route to another page
document.getElementById("consult-now").onclick = function () {
    location.href = "https://www.google.com";
};
document.getElementById("contact-us").onclick = function () {
    location.href = "https://www.google.com";
};

// Ready to protect your application
document.getElementById("request-demo").onclick = function () {
    location.href = "https://www.google.com";
};
document.getElementById("contact-us-ready").onclick = function () {
    location.href = "https://www.google.com";
};
// Footer icons
document.getElementById("footer-facebook").onclick = function () {
    location.href = "https://www.facebook.com";
};
document.getElementById("footer-twitter").onclick = function () {
    location.href = "https://www.twitter.com";
};
document.getElementById("footer-instagram").onclick = function () {
    location.href = "https://www.instagram.com";
};
document.getElementById("footer-linkedin").onclick = function () {
    location.href = "https://www.linkedin.com";
};

//Show time in banner
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    // Option 1, 2: Initialize new year value
    // let today = new Date(),
    //     dd = String(today.getDate()).padStart(2, "0"),
    //     mm = String(today.getMonth() + 1).padStart(2, "0"),
    //     yyyy = today.getFullYear();
    //     today = mm + "/" + dd + "/" + yyyy;

    // //Option 1: If want year automatically update
    // let nextYear = yyyy + 1,
    //     dayMonth = "03/30/",
    //     reachTime = dayMonth + yyyy;
    // if (today > reachTime) {
    //     reachTime = dayMonth + nextYear;
    // }
    // const countDown = new Date(reachTime).getTime();

    // // Option 2: If want fixed year
    // let endTime = "03/30/2022";
    // const countDown = new Date(endTime).getTime();

    // Set interval
    // x = setInterval(
    //     function() {
    //         const now = new Date().getTime();
    //         const distance = countDown - now;
    //         if (Math.floor(distance / (day)) < 10) 
    //             document.getElementById("days").innerText = '0' + Math.floor(distance / (day));
    //         else document.getElementById("days").innerText = Math.floor(distance / (day));
    //         if (Math.floor((distance % (day)) / (hour)) < 10) 
    //             document.getElementById("hours").innerText = '0' + Math.floor((distance % (day)) / (hour));
    //         else document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
    //         if (Math.floor((distance % (hour)) / (minute)) < 10) 
    //             document.getElementById("minutes").innerText ='0' +  Math.floor((distance % (hour)) / (minute));
    //         else document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
    //         if (Math.floor((distance % (minute)) / second) < 10) 
    //             document.getElementById("seconds").innerText = '0' + Math.floor((distance % (minute)) / second);
    //         else document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    //         if (distance < 0) {
    //             clearInterval(x);
    //         }
    //     }, 0)
    // }()
    
    //Option 3: If want set time distance
    let fixeddays = 7,
        fixedhours = 3,
        fixedminutes = 4,
        fixedsecs = 9;
    let countDown = fixeddays *day + fixedhours *hour + fixedminutes *minute + fixedsecs;
    x = setInterval(
        function() {
            countDown = countDown - 1;
            let timeRemaining = countDown;
            if (Math.floor(timeRemaining / (day)) < 10) 
                document.getElementById("days").innerText = '0' + Math.floor(timeRemaining / (day));
            else document.getElementById("days").innerText = timeRemaining+"/"+day;
                
            if (Math.floor((timeRemaining % (day)) / (hour)) < 10) 
                document.getElementById("hours").innerText = '0' + Math.floor((timeRemaining % (day)) / (hour));
            else document.getElementById("hours").innerText = Math.floor((timeRemaining % (day)) / (hour));
                
            if (Math.floor((timeRemaining % (hour)) / (minute)) < 10) 
                document.getElementById("minutes").innerText ='0' +  Math.floor((timeRemaining % (hour)) / (minute));
            else document.getElementById("minutes").innerText = Math.floor((timeRemaining % (hour)) / (minute));
            
            if (Math.floor((timeRemaining % (minute)) / second) < 10) 
                document.getElementById("seconds").innerText = '0' + Math.floor((timeRemaining % (minute)) / second);
            else document.getElementById("seconds").innerText = Math.floor((timeRemaining % (minute)) / second);
        }, 0)
    }()
);