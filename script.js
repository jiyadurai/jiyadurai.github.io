document.addEventListener('DOMContentLoaded', () => {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const message = document.getElementById('message');

    const messages = [
        "You clicked the button!",
        "Here's some new text.",
        "The javascript is working!",
        "Isn't this cool?",
        "Let's go back to the original message."
    ];

    let currentIndex = 0;

    changeTextBtn.addEventListener('click', () => {
        message.textContent = messages[currentIndex];
        currentIndex = (currentIndex + 1) % messages.length;
    });
});
