let spotlightIndex = 0;
const spotlights = document.querySelectorAll('.company-spotlight');

function showNextSpotlight() {
    spotlights[spotlightIndex].classList.remove('active');
    spotlightIndex = (spotlightIndex + 1) % spotlights.length;
    spotlights[spotlightIndex].classList.add('active');
}

setInterval(showNextSpotlight, 5000); // Auto transition every 5 seconds
