// script.js
const likeButton = document.getElementById('likeButton');
const emojisContainer = document.getElementById('emojis-container');

likeButton.addEventListener('click', () => {
    // Define an array of emojis to use
    const emojiArray = ["🎉", "🎈", "🥳", "💖",];
    
    // Create and add random emojis to the container
    for (let i = 0; i < 50; i++) {
        const emoji = document.createElement('span');
        emoji.classList.add('emoji');
        emoji.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)]; // Pick a random emoji
        
        // Random starting positions
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;

        // Random falling speed
        const randomSpeed = Math.random() * 5 + 3; // Adjust the range and values as needed
        
        emoji.style.left = `${randomX}px`;
        emoji.style.top = `${randomY}px`;
        emoji.style.animationDuration = `${randomSpeed}s`; // Set the falling speed
        
        emojisContainer.appendChild(emoji);
    }

    // Trigger the emoji animation for the specified duration
    emojisContainer.style.animation = `emojiAnimation 5s linear`; // Adjust the duration as needed

    setTimeout(() => {
        emojisContainer.innerHTML = ''; // Remove emojis after the animation duration
    }, 10000); // Remove emojis after 10 seconds
});



