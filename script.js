/* =========================================
   1. TIMER CONTROL
   ========================================= */

// Stops the countdown and clears the interval ID.
function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

/* =========================================
   2. TIME FORMATTING
   ========================================= */

// Converts seconds into a MM:SS format.
// Example: 70 seconds becomes "01:10".
function formatTime(timeRemaining) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = Math.floor(timeRemaining % 60);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

/* =========================================
   3. UPDATE THE DISPLAY
   ========================================= */

// Displays the formatted time on the page.
function render(value) {
  timer.textContent = value;
}

/* =========================================
   4. SELECT HTML ELEMENTS
   ========================================= */

// Get references to the timer display and buttons.
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const timer = document.querySelector("#timer");

/* =========================================
   5. TIMER VARIABLES
   ========================================= */

// The starting countdown time, measured in seconds.
const INTITIAL_TIME = 10;

// Tracks the remaining seconds.
let timeRemaining = INTITIAL_TIME;

// Stores the interval ID so the timer can be stopped.
let intervalId = null;

/* =========================================
   6. START BUTTON
   ========================================= */

// Starts the countdown when the Start button is clicked.
function handleStartClick() {
  // Prevent multiple intervals from running at once.
  if (intervalId != null) {
    return;
  }

  // Run the countdown every 1000 milliseconds (1 second).
  intervalId = setInterval(() => {
    // Stop the timer when the countdown reaches zero.
    if (timeRemaining <= 0) {
      stopTimer();
      return;
    }

    // Decrease the remaining time by one second.
    timeRemaining--;

    // Update the display with the new formatted time.
    render(formatTime(timeRemaining));
  }, 1000);
}

/* =========================================
   7. STOP BUTTON
   ========================================= */

// Stops the countdown without resetting the remaining time.
function handleStopClick() {
  stopTimer();
}

/* =========================================
   8. RESET BUTTON
   ========================================= */

// Stops the countdown and restores the starting time.
function handleResetClick() {
  stopTimer();
  timeRemaining = INTITIAL_TIME;
  render(formatTime(timeRemaining));
}

/* =========================================
   9. EVENT LISTENERS
   ========================================= */

// Connect each button to its click handler.
startBtn.addEventListener("click", handleStartClick);
stopBtn.addEventListener("click", handleStopClick);
resetBtn.addEventListener("click", handleResetClick);

/* =========================================
   10. INITIAL DISPLAY
   ========================================= */

// Show the starting time when the page loads.
render(formatTime(timeRemaining));