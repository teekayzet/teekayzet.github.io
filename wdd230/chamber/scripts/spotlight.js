// Function to fetch JSON data from the provided URL
async function fetchMemberData() {
    try {
      const response = await fetch('https://teekayzet.github.io/wdd230/chamber/data/members.json');
      const data = await response.json();
      return data.companies;
    } catch (error) {
      console.error('Error fetching member data:', error);
      return [];
    }
  }
  
  // Function to filter companies based on membership level (Silver or Gold)
  function filterMembersByLevel(members, level) {
    return members.filter(member => member.membership_level === level);
  }
  
  // Function to randomly select a subset of companies
  function selectRandomMembers(members, count) {
    const randomMembers = [];
    const totalMembers = members.length;
    const selectedIndices = new Set();
  
    while (randomMembers.length < count && selectedIndices.size < totalMembers) {
      const randomIndex = Math.floor(Math.random() * totalMembers);
      if (!selectedIndices.has(randomIndex)) {
        selectedIndices.add(randomIndex);
        randomMembers.push(members[randomIndex]);
      }
    }
  
    return randomMembers;
  }
  
  // Function to generate HTML for spotlight advertisements
  function generateSpotlightHTML(member) {
    return `
      <div class="spotlight-ad">
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.other_information}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      </div>
    `;
  }
  
  // Function to display spotlight advertisements on the webpage with transition
  async function displaySpotlightsWithTransition() {
    const container = document.querySelector('.company-spotlights-container');
    
    // Fetch member data
    const members = await fetchMemberData();
    
    // Filter Silver and Gold members
    const silverMembers = filterMembersByLevel(members, 'Silver');
    const goldMembers = filterMembersByLevel(members, 'Gold');
    
    // Combine Silver and Gold members
    const allSpotlightMembers = [...silverMembers, ...goldMembers];
    
    // Initialize index for current spotlight member
    let currentIndex = 0;
  
    // Function to display next spotlight member
    function showNextSpotlight() {
      const currentMember = allSpotlightMembers[currentIndex];
      const spotlightHTML = generateSpotlightHTML(currentMember);
      container.innerHTML = spotlightHTML;
      
      // Increment index for next spotlight member
      currentIndex = (currentIndex + 1) % allSpotlightMembers.length;
  
      // Call the function recursively after 5 seconds
      setTimeout(showNextSpotlight, 5000);
    }
  
    // Initial call to start the transition
    showNextSpotlight();
  }
  
  // Call the displaySpotlightsWithTransition function to initiate the process
  displaySpotlightsWithTransition();
  