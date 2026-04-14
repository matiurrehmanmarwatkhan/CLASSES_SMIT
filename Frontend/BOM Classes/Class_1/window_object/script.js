let clock = document.getElementById("clock");
let ampm = document.getElementById("ampm");
let dateText = document.getElementById("date");

setInterval(() => {
    let now = new Date();

    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    ampm.innerText = period;

    let options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
    dateText.innerText = now.toLocaleDateString("en-US", options);

}, 1000);
