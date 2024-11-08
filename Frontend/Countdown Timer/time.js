const input = document.getElementById("secondsInput");
const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const display = document.getElementById("display");

let counter;
let timeLeft = 0;  // Initialize 
let isPaused = true;  // Track whether the timer is paused or running

startButton.addEventListener('click', () => {
    // If the timer was paused, resume from timeLeft; otherwise, start a new countdown
    if (isPaused) {
        // Get new time only if timeLeft hasn't been set or if it's the first run
        if (timeLeft === 0) {
            timeLeft = parseInt(input.value);
        }

        if (isNaN(timeLeft) || timeLeft <= 0) {
            alert("Please enter a valid number of seconds");
            return;
        }

        display.textContent = `Time Remaining: ${timeLeft}s`;

        // Start or resume the countdown
        counter = setInterval(() => {
            timeLeft--;

            if (timeLeft >= 0) {
                display.textContent = `Time Remaining: ${timeLeft}s`;
            }
            
            if (timeLeft <= 0) {
                clearInterval(counter);
                display.textContent = "Time's up!";
                timeLeft = 0;  // Reset timeLeft 
            }
        }, 1000);

        isPaused = false;  
    }
});

// Stop button to pause the timer
stopButton.addEventListener('click', () => {
    clearInterval(counter);  // Stop the interval
    isPaused = true;  // Set paused status to true
    display.textContent = `Timer paused at: ${timeLeft}s`;  // Display paused time
});
