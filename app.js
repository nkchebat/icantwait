function timer() {
    // Grab the current time and create an array for the day and hour of the event
    let current = new Date();
    let evented = [24, 22];

    // Get the span tags so we can insert our calculation
    let days = document.getElementById("days")
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    // Get the current day, hours, and minutes
    let current_day = current.getDate();
    let current_hours = current.getHours();
    let current_minutes = current.getMinutes();
    let current_seconds = current.getSeconds();

    // We need to calculate the time difference between current and event
    let current_total = ((evented[0] *24*3600) + (evented[1] * 3600)) - (current_seconds + (current_minutes *60) + (current_hours *3600) + (current_day * 24*3600))

    let input_days = Math.floor(current_total / (24*3600))
    days.textContent = input_days.toString()
    current_total -= input_days * 24*3600

    let input_hours = Math.floor(current_total / 3600)
    hours.textContent = input_hours.toString()
    current_total -= input_hours * 3600

    let input_minutes = Math.floor(current_total / 60)
    minutes.textContent = input_minutes.toString()
    current_total -= input_minutes * 60

    seconds.textContent = current_total.toString()
}

document.addEventListener('DOMContentLoaded', timer);

setInterval(timer, 1000)