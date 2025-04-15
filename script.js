function updateclock(){
    const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const now = new Date();
const hours = now.getHours() % 12 || 12;
const minutes = now.getMinutes().toString().padStart(2, "0"); //minutes < 10 ? `0${minutes}` : `${minutes}`;
const seconds = now.getSeconds().toString().padStart(2, "0"); 
const ampm = now.getHours() >= 12 ? "PM" : "AM";

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
dateElement.textContent = now.toLocaleDateString(undefined, options)
}

setInterval(updateclock, 1000);
updateclock();