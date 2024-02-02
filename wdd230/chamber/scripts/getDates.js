// get the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// get the date the document was last modified
const lastModifiedDate = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last modified: ${lastModifiedDate}`;

// Function to set the current date and time
function setTimestamp() {
  var now = new Date();
  var timestampField = document.getElementById("timestamp");

  var formattedTimestamp =
    now.getFullYear() +
    "-" +
    ("0" + (now.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + now.getDate()).slice(-2) +
    " " +
    ("0" + now.getHours()).slice(-2) +
    ":" +
    ("0" + now.getMinutes()).slice(-2) +
    ":" +
    ("0" + now.getSeconds()).slice(-2);

  timestampField.value = formattedTimestamp;
}

window.onload = setTimestamp;
