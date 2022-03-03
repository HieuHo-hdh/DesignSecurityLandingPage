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