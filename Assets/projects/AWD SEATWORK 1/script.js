// For Illumination
const cardContainer = document.getElementById('cardContainer');
const illumination = document.querySelector('.illumination');

cardContainer.addEventListener("mousemove", (e) => {
    const rect = cardContainer.getBoundingClientRect();
    const x = e.clientX - rect.left; // calculate x relative to the card
    const y = e.clientY - rect.top;  // calculate y relative to the card

    cardContainer.style.setProperty('--x', `${x}px`);
    cardContainer.style.setProperty('--y', `${y}px`);
});

// Get the card and helloText elements
const helloTextContainer = document.getElementById('helloTextContainer');

// Add event listener for mouseover
cardContainer.addEventListener('mouseover', () => {
    helloTextContainer.style.opacity = '1';
    illumination.classList.add('active'); // Add 'active' class on mouseover
});

// Add event listener for mouseout
cardContainer.addEventListener('mouseout', () => {
    helloTextContainer.style.opacity = '0';
    illumination.classList.remove('active'); // Remove 'active' class on mouseout
});
