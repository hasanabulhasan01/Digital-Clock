let intervalRef = null;
function updateTime() {
    let now = new Date();

    let hour = now.getHours() % 12 || 12; // Convert to 12-hour format
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let ampm = hour >= 12 ? "AM" : "PM";

    document.getElementById("hour").innerHTML = String(hour).padStart(2, "0");
    document.getElementById("minute").innerHTML = String(minute).padStart(2, "0");
    document.getElementById("second").innerHTML = String(second).padStart(2, "0");
    document.getElementById("ampm").innerHTML = ampm;
}

function startClock(){
    if(intervalRef === null){
        updateTime() // update the clock immediately when started
        intervalRef = setInterval(updateTime, 1000); // start the clock
    }
}

function stopClock(){
    if(intervalRef !== null){
        clearInterval(intervalRef); // stop the clock.
        intervalRef = null; // reset

}
}

const powerButton = document.getElementById("powerButton");

powerButton.addEventListener("click", function () {
    if (intervalRef === null) {
        startClock(); // If the clock is stopped, start it
        // powerButton.style.color="green";
    } else {
        stopClock(); // If the clock is running, stop it
        // powerButton.style.color="red";
    }
});