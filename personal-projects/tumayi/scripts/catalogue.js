const linksURL = "https://teekayzet.github.io/personal-projects/tumayi/data/storecatalogue";

// Fetch the store catalogue JSON data
fetch(linksURL)
  .then(response => response.json())
  .then(data => {
    // Select a few items from each category
    const selectedItems = [];
    data.store_catalogue.forEach(category => {
      const categoryItems = category.items.slice(0, 3); // Selecting the first 3 items from each category
      selectedItems.push(...categoryItems);
    });

    // Display the selected items on the home page
    const homePageContainer = document.getElementById('home-page-container');
    selectedItems.forEach(item => {
      const itemElement = createItemElement(item);
      homePageContainer.appendChild(itemElement);
    });
  })
  .catch(error => console.error('Error fetching store catalogue:', error));

// Function to create HTML elements for displaying an item
function createItemElement(item) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');

  const itemName = document.createElement('h2');
  itemName.textContent = item.item_name;
  itemDiv.appendChild(itemName);

  const itemDescription = document.createElement('p');
  itemDescription.textContent = item.description;
  itemDiv.appendChild(itemDescription);

  const itemPrice = document.createElement('p');
  itemPrice.textContent = `Price: $${item.price}`;
  itemDiv.appendChild(itemPrice);

  const itemImage = document.createElement('img');
  itemImage.src = item.image_url;
  itemImage.alt = item.item_name;
  itemDiv.appendChild(itemImage);

  return itemDiv;
}
