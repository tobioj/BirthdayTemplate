document.getElementById("playSong").addEventListener("click", function() {
    document.getElementById("birthdaySong").play();
});


function loopFireworks() {
    const endTime = Date.now() + 500; // for 500ms

    const interval = setInterval(() => {
        confetti({
            particleCount: 100,
            spread: 100,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.6
            }
        });

        // Stop after 700ms
        if (Date.now() > endTime) {
            clearInterval(interval);
        }
    }, 100); // one burst every 100ms
}

// Call it on page load
window.addEventListener("load", () => {
    loopFireworks();
});