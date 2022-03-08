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

//Show time in banner
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    //***: Set time here
    let fixeddays = 07,
        fixedhours = 03,
        fixedminutes = 04,
        fixedsecs = 09;
    let countDown = fixeddays *day + fixedhours *hour + fixedminutes *minute + (fixedsecs+1)*second;
    x = setInterval(
        function() {
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
            countDown = countDown - 4;
        }, 0)
    }()
);

//On Click => show & hide menu - mobile
function showNavBarMobile() {
    var appSidebar = document.getElementById("app-sidebar");
    var appSidebarContent = document.getElementById("app-sidebar-content");
    appSidebar.style.display= "block";
    x = setTimeout(
        function() {
            appSidebarContent.style.transform = "translateX(99.9%)";
        }, 1
    )
    appSidebar.className="app-sidebar open";
}

function hideNavBarMobile() {
    var appSidebar = document.getElementById("app-sidebar");
    var appSidebarContent = document.getElementById("app-sidebar-content");
    x = setTimeout(
        function() {
            appSidebarContent.style.transform = "unset";
        }, 1
    )
    appSidebar.className="app-sidebar";
}

//On Click => show & hide menu - mobile
function setActiveNavigation(event) {
    var menuItem = document.getElementsByClassName("menu-item active");
    if (menuItem.length > 0)
    menuItem[0].className="menu-item"
    event.className="menu-item active";
}

function setMobileActiveNavigation(event) {
    var menuItem = document.getElementsByClassName("mobile-menu-item active");
    if (menuItem.length > 0)
    menuItem[0].className="mobile-menu-item"
    event.className="mobile-menu-item active";
}