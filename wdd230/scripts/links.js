const linksURL = "https://teekayzet.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const learningActivitiesList = document.querySelector('.learning-activities');
    weeks.forEach(week => {
        const weekListItem = document.createElement('li');
        weekListItem.textContent = week.week + ":";

        const weekLinks = week.links.map(link => {
            return `<a href="${link.url}">${link.title}</a>`;
        }).join(' | ');

        weekListItem.innerHTML += weekLinks;
        learningActivitiesList.appendChild(weekListItem);
    });
}

getLinks();
