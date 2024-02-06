const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    card.classList.add('prophet-card');
    
    const fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    
    const birthdate = document.createElement('p');
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
    
    const death = document.createElement('p');
    death.textContent = `Death: ${prophet.death ? prophet.death : 'Still living'}`;
    
    const numChildren = document.createElement('p');
    numChildren.textContent = `Number of Children: ${prophet.numofchildren}`;
    
    const portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name}'s portrait`);
    portrait.setAttribute('loading', 'lazy');
    
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(death);
    card.appendChild(numChildren);
    card.appendChild(portrait);
    
    cards.appendChild(card);
  });
}

getProphetData();
