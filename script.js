document.addEventListener('DOMContentLoaded', () => {
    const doorElement = document.getElementById('door');
    const windowElement = document.getElementById('window');
    const personElement = document.getElementById('person-app');
    const personSvg = document.getElementById('person-svg');
    const airplane = document.getElementById('airplane');
    const youtubePlayer = document.getElementById('youtube-player');

    let musicStarted = false;

    function startMusic() {
        if (!musicStarted) {
            // Post message to YouTube iframe API to start video
            youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            musicStarted = true;
        }
    }

    // Person Toggle (Standing/Sitting)
    personElement.addEventListener('click', () => {
        personSvg.classList.toggle('sitting');
    });

    // Door Interaction
    doorElement.addEventListener('click', () => {
        doorElement.classList.add('open');
        startMusic(); // Start music on first interaction
    });

    // Window Interaction
    windowElement.addEventListener('click', (e) => {
        // If clicking specifically the airplane, don't toggle window
        if (e.target === airplane) return;

        if (doorElement.classList.contains('open')) {
            windowElement.classList.toggle('open');
        }
    });

    // Airplane Fly Away
    airplane.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent window click
        airplane.classList.add('fly-away');
    });
});
