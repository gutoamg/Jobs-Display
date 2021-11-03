const nodeList_to_array = (nodeList) => {
    var array = [];
    var i = nodeList.length
    // iterate backwards ensuring that length is an UInt32
    for (i >>> 0; i--;) {
        array[i] = nodeList[i];
    }
    return array;
};

var remoteJobs = document.getElementById("remote-jobs");
var menuOptions = document.getElementsByClassName("tabs-title");
var menu = document.getElementById("tabs-row");
var cards = document.getElementsByClassName("card");
cards = nodeList_to_array(cards);

// Menu functionalities
menu.addEventListener("click", (e) => {
    if (e.target.className == "tabs-title All") {
        menuOptions[0].style.color = "#0C63FF";
        menuOptions[1].style.color = "#87909E";
        menuOptions[2].style.color = "#87909E";
        menuOptions[3].style.color = "#87909E";
        remoteJobs.style.display = "none";
        cards.forEach(element => {
            element.style.display = "block";
        });
    } else if (e.target.className == "tabs-title Full-time") {
        // Changing menu button colors
        menuOptions[0].style.color = "#87909E";
        menuOptions[1].style.color = "#0C63FF";
        menuOptions[2].style.color = "#87909E";
        menuOptions[3].style.color = "#87909E";

        // Removing "No remote jobs phrase"
        remoteJobs.style.display = "none";

        // Adjusting cards that need to appear
        cards[0].style.display = "block";
        cards[1].style.display = "block";
        cards[2].style.display = "block";
        cards[3].style.display = "block";
        cards[4].style.display = "block";
        cards[5].style.display = "block";
        cards[6].style.display = "none";
        cards[7].style.display = "block";
    } else if (e.target.className == "tabs-title Part-time") {
        menuOptions[0].style.color = "#87909E";
        menuOptions[1].style.color = "#87909E";
        menuOptions[2].style.color = "#0C63FF";
        menuOptions[3].style.color = "#87909E";
        remoteJobs.style.display = "none";
        cards[0].style.display = "none";
        cards[1].style.display = "none";
        cards[2].style.display = "none";
        cards[3].style.display = "none";
        cards[4].style.display = "none";
        cards[5].style.display = "none";
        cards[6].style.display = "block";
        cards[7].style.display = "none";
    } else if (e.target.className == "tabs-title Remote") {
        menuOptions[0].style.color = "#87909E";
        menuOptions[1].style.color = "#87909E";
        menuOptions[2].style.color = "#87909E";
        menuOptions[3].style.color = "#0C63FF";
        remoteJobs.style.display = "block";
        cards.forEach(element => {
            element.style.display = "none";
        });
    }
});