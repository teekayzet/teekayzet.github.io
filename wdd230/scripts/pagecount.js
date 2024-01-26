// Get the counter element
const counterElement = document.getElementById('counter');

// Check if the page visit count is stored in localStorage
if (localStorage.getItem('pageVisits')) {
  // If it is, retrieve the count from localStorage and update the counter
  let count = parseInt(localStorage.getItem('pageVisits'));
  counterElement.textContent = count;
  count++; // Increment the count for the current visit
  localStorage.setItem('pageVisits', count); // Update the count in localStorage
} else {
  // If it's not, initialize the count to 1 and store it in localStorage
  localStorage.setItem('pageVisits', 1);
  counterElement.textContent = 1;
}
