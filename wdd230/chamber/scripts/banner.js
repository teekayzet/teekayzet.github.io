// Function to check if the current day is Monday, Tuesday, or Wednesday
function isWeekday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday, Tuesday, or Wednesday
  }
  
  // Function to close the banner
  function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
  }
  
  // Function to display the banner if it's a weekday
  function displayBanner() {
    const banner = document.getElementById('banner');
    if (isWeekday()) {
      banner.style.display = 'block';
    }
  }
  
  // Call the displayBanner function when the page loads
  window.onload = displayBanner;
  