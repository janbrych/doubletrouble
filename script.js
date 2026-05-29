document.addEventListener('DOMContentLoaded', () => {
    const windowElement = document.getElementById('window');

    windowElement.addEventListener('click', () => {
        windowElement.classList.toggle('open');
    });
});
