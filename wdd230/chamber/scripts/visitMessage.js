document.addEventListener("DOMContentLoaded", function() {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
  
    if (lastVisit) {
      const daysSinceLastVisit = Math.floor((new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
      if (daysSinceLastVisit === 0) {
        visitMessage.textContent = "Back so soon! Awesome!";
      } else {
        const message = daysSinceLastVisit === 1 ? "day" : "days";
        visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${message} ago.`;
      }
    } else {
      visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }
  
    localStorage.setItem("lastVisit", new Date());
  });
  