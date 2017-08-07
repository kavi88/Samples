// JavaScript source code
var randomInput = Math.floor(Math.random() * 4);
function SetProgress(progressdelta) {
    try {
        var scale = 230; //for 100%
        var progressBar = document.getElementById("myBar" + progressBarItem.selectedIndex);
        var progressBarText = document.getElementById("myBarText" + progressBarItem.selectedIndex);
        var currentPercentage = progressBarText.innerHTML.replace("%", "");
        var currentValue = (currentPercentage * 230) / 100;
        var newValue = parseInt(currentValue) + parseInt(progressdelta);
        var newPercentage = parseInt((newValue * 100) / 230);
        if (newPercentage > 100) {
            progressBar.style.width = "100%";
            progressBarText.innerHTML = newPercentage + "%";
            progressBar.style.background = "red";
        } else if (newPercentage < 0) {
            progressBar.style.width = "0%";
            progressBarText.innerHTML = "0%";
            progressBar.style.background = "green";
        } else {
            progressBarText.innerHTML = newPercentage + "%";
            progressBar.style.width = newPercentage + "%";
            progressBar.style.background = "green";
        }
    } catch (e) {
        alert(e);
    }
}