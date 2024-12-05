const burger = document.getElementById("burger");
const mainMenu = document.querySelector(".mainMenu");

burger.addEventListener("click", function() {
    if (mainMenu.style.display === "none" || mainMenu.style.display === "") {
        mainMenu.style.display = "block"; 
    } else if (mainMenu.style.display === "block") {
        mainMenu.style.display = "none"; 
    }
});

const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play(); // Joue la musique
        } else {
            audioPlayer.pause(); // Met la musique en pause
        }
    });