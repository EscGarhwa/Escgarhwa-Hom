document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("countdown-timer");
    const eventDate = new Date("2024-12-31T00:00:00");

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = eventDate - now;
        
        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            timerElement.textContent = "Event has started!";
        }
    }

    setInterval(updateCountdown, 1000);
});
