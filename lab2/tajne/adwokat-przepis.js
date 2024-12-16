let secondsOnPage = 0;

function updateTimeSpent() {
    secondsOnPage++;
    document.getElementById("timeOnPage").textContent = `${secondsOnPage} s`;
}

setInterval(updateTimeSpent, 1000);

function redirectToAdwokat() {
    window.location.href = "../adwokat.html";
}

window.onload = function () {
    redirectTimeout = setTimeout(redirectToAdwokat, 10000);
};

function likePage() {
    clearTimeout(redirectTimeout);
    document.getElementById("podoba").classList += "clicked";
}
