const url = 'https://teekayzet.github.io/wdd230/chamber/data/members.json';
const directoryCards = document.querySelector('#directory-cards');

async function getMemberData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies);
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

const displayMembers = (companies) => {
  companies.forEach((company) => {
    const card = document.createElement('section');
    card.classList.add('company-card');
    
    const companyName = document.createElement('h2');
    companyName.textContent = company.name;
    
    const address = document.createElement('p');
    address.textContent = `Address: ${company.address}`;
    
    const phone = document.createElement('p');
    phone.textContent = `Phone: ${company.phone}`;
    
    const website = document.createElement('a');
    website.href = company.website;
    website.textContent = 'Website';
    
    const membershipLevel = document.createElement('p');
    membershipLevel.textContent = `Membership Level: ${company.membership_level}`;
    
    const otherInformation = document.createElement('p');
    otherInformation.textContent = company.other_information;
    
    const image = document.createElement('img');
    image.src = company.image;
    image.alt = `${company.name}'s logo`;
    
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membershipLevel);
    card.appendChild(otherInformation);
    card.appendChild(image);
    
    directoryCards.appendChild(card);
  });
}

getMemberData();
