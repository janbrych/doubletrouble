document.addEventListener('DOMContentLoaded', () => {
    const doorElement = document.getElementById('door');
    const windowElement = document.getElementById('window');

    // First, user must open the door
    doorElement.addEventListener('click', () => {
        doorElement.classList.add('open');
    });

    // Then, user can open the window
    windowElement.addEventListener('click', () => {
        // Only allow opening the window if the door is open (or just toggle regardless)
        // Given the instructions "before the window you must open the door",
        // we'll let the door be opened first.
        if (doorElement.classList.contains('open')) {
            windowElement.classList.toggle('open');
        }
    });
});
