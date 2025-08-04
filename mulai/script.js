let duration = 30; // durasi dalam detik
let timerDisplay = document.getElementById("timer");
let stopButton = document.getElementById("stopBtn");
let interval;

function startCountdown() {
    interval = setInterval(() => {
        if (duration <= 0) {
            clearInterval(interval);
            timerDisplay.textContent = "Selesai";
            return;
        }

        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        timerDisplay.textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        duration--;
    }, 1000);
}

stopButton.addEventListener("click", () => {
    clearInterval(interval);
    timerDisplay.textContent = "Dihentikan";
});

// Mulai otomatis saat halaman dibuka
startCountdown();