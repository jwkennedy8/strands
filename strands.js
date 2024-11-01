const wordChain = ["ocean", "wave", "surf", "beach", "sand", "shell"];
let currentIndex = 0;

document.getElementById("submit-button").addEventListener("click", function() {
    const userGuess = document.getElementById("user-input").value.trim().toLowerCase();
    if (userGuess === wordChain[currentIndex]) {
        document.getElementById("feedback").textContent = `Correct! Next word...`;
        document.getElementById("guessed-words").textContent += userGuess + " -> ";
        document.getElementById("user-input").value = ""; // Clear input
        currentIndex++;
        if (currentIndex < wordChain.length) {
            document.getElementById("hint").textContent = `Hint: Try a word related to "${wordChain[currentIndex - 1]}".`;
        } else {
            document.getElementById("feedback").textContent = `Congratulations! You've completed the strand.`;
            document.getElementById("hint").textContent = "";
            document.getElementById("submit-button").disabled = true; // Game over
        }
    } else {
        document.getElementById("feedback").textContent = `Incorrect, try again!`;
    }
});
