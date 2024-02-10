const url = "https://teekayzet.github.io/wdd230/chamber/data/members.json";

let isGridView = true; // Flag to track current view mode

async function getMemberData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (isGridView) {
      displayMembersAsGrid(data.companies);
    } else {
      displayMembersAsTable(data.companies);
    }
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

function displayMembersAsGrid(companies) {
  const directoryContainer = document.getElementById("directory-container");
  directoryContainer.innerHTML = ""; // Clear previous content

  companies.forEach((company) => {
    const card = document.createElement("section");
    card.classList.add("company-card");

    const companyName = document.createElement("h2");
    companyName.textContent = company.name;

    const address = document.createElement("p");
    address.textContent = `Address: ${company.address}`;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${company.phone}`;

    const website = document.createElement("a");
    website.href = company.website;
    website.textContent = company.website;

    const membershipLevel = document.createElement("p");
    membershipLevel.textContent = `Membership Level: ${company.membership_level}`;

    const otherInformation = document.createElement("p");
    otherInformation.textContent = company.other_information;

    const image = document.createElement("img");
    image.src = company.image;
    image.alt = `${company.name}'s logo`;

    card.appendChild(companyName);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membershipLevel);
    card.appendChild(otherInformation);

    directoryContainer.appendChild(card);
  });
}

function displayMembersAsTable(companies) {
  const directoryContainer = document.getElementById("directory-container");
  directoryContainer.innerHTML = ""; // Clear previous content

  const table = document.createElement("table");
  table.classList.add("member-table");

  // Create table header
  const headerRow = document.createElement("tr");
  const headers = ["Company Name", "Address", "Phone", "Website", "Membership Level", "Other Information"];
  headers.forEach(headerText => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  // Create table rows for each company
  companies.forEach((company) => {
    const row = document.createElement("tr");

    // Populate row cells with company information
    const cells = [
      company.name,
      company.address,
      company.phone,
      `<a href="${company.website}" target="_blank">Visit</a>`,
      company.membership_level,
      company.other_information
    ];

    cells.forEach(cellText => {
      const cell = document.createElement("td");
      cell.innerHTML = cellText;
      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  directoryContainer.appendChild(table);
}

// Event listeners for the toggle buttons
document.getElementById("grid-view").addEventListener("click", () => {
  isGridView = true;
  getMemberData();
});

document.getElementById("table-view").addEventListener("click", () => {
  isGridView = false;
  getMemberData();
});

// Initial fetch and display
getMemberData();
function displayMembersAsTable(companies) {
  const directoryContainer = document.getElementById("directory-container");
  directoryContainer.innerHTML = ""; // Clear previous content

  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px (considered as mobile)

  if (isMobile) {
    // Display in card format
    companies.forEach((company, index) => {
      const card = document.createElement("section");
      card.classList.add("company-caard");

      if (index % 2 === 0) {
        card.classList.add("zebra"); // Apply zebra styling for every other card
      }

      const companyName = document.createElement("h2");
      companyName.textContent = company.name;
      const address = document.createElement("p");
      address.textContent = `Address: ${company.address}`;

      const phone = document.createElement("p");
      phone.textContent = `Phone: ${company.phone}`;

      const website = document.createElement("a");
      website.href = company.website;
      website.textContent = company.website;

      const membershipLevel = document.createElement("p");
      membershipLevel.textContent = `Membership Level: ${company.membership_level}`;

      const otherInformation = document.createElement("p");
      otherInformation.textContent = company.other_information;

      card.appendChild(companyName);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(membershipLevel);
      card.appendChild(otherInformation);

      directoryContainer.appendChild(card);
    });
  } else {
    // Display in table format
    const table = document.createElement("table");
    table.classList.add("member-table");

    // Create table header
    const headerRow = document.createElement("tr");
    const headers = ["Company Name", "Address", "Phone", "Website", "Membership Level", "Other Information"];
    headers.forEach(headerText => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    // Create table rows for each company
    companies.forEach((company, index) => {
      const row = document.createElement("tr");

      if (index % 2 === 0) {
        row.classList.add("zebra"); // Apply zebra styling for every other row
      }

      // Populate row cells with company information
      const cells = [
        company.name,
        company.address,
        company.phone,
        `<a href="${company.website}" target="_blank">Visit</a>`,
        company.membership_level,
        company.other_information
      ];

      cells.forEach(cellText => {
        const cell = document.createElement("td");
        cell.innerHTML = cellText;
        row.appendChild(cell);
      });

      table.appendChild(row);
    });

    directoryContainer.appendChild(table);
  }
}
