function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue("populationCount", 1499900, 1500000, 1500); // Example: Start from 0 and count up to 1,500,000 in 3 seconds
animateValue("areaCount", 800, 872, 1500);
animateValue("populationDensityCount", 2500, 2571, 1500)
animateValue("unemploymentRateCount", 0, 30, 1500)
animateValue("povertyIndexCount", 0, 34, 1500)