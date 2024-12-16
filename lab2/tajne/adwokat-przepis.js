let secondsOnPage = 0;

function updateTimeSpent() {
    secondsOnPage++;
    document.getElementById("timeOnPage").textContent = `${secondsOnPage} s`;
}

setInterval(updateTimeSpent, 1000);
