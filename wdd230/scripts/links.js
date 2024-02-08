const baseURL = "https://teekayzet.github.io/wdd230/";
const linksURL = "https://teekayzet.github.io/wdd230/data/links.json";
const linksContainer = document.querySelector("#learning-activities");

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}

function displayLinks(weeks) {
  
  weeks.forEach((week) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${week.week}: `;
    
    week.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      anchor.setAttribute("target", "_blank");
      
      listItem.appendChild(anchor);
      listItem.appendChild(document.createTextNode(" | ")); // Add separator
    });
    
    linksContainer.appendChild(listItem);
  });
}

getLinks();
