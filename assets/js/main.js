let sleepResult = document.getElementById("sleep-result");

function sleepNow() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // 5 cycles
    date.setMinutes(minutes + 450)
    let idealHours = 0;
    let idealMinutes = 0;
    sleepResult.innerHTML = "It's " + hours + ":" + minutes + " now." +
        " You should <div class=\"time-result\">set your alarm at " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + "</div>" +
        "to complete five 90-minute sleep cycles.";
}