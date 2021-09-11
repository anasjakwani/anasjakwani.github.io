const getData = (key) => {
    localStorage.getItem(key);
};

function sign() {
    window.location = "signup.html"
}

function createTeam() {
    document.getElementById("blur").className += " blur";
    document.getElementById("showPopup").className = "main_div1";
}
function popUpHide() {
    document.getElementById("blur").className = "main_div";
    document.getElementById("showPopup").className = "hidden";
}
function home() {
    document.getElementById("yourteam").className = "hide";
    document.getElementById("home").className = "show";
}

function teamsYouOwn() {
    document.getElementById("home").className = "hide";
    document.getElementById("yourteam").className = "show";
}


function teamsyoupart() {
    document.getElementById("home").className = "hide";
    document.getElementById("yourteam").className = "show";
}



