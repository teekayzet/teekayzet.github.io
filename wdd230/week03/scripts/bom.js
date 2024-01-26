const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Define the function to get the chapter list
function getChapterList() {
  const storedChapters = localStorage.getItem('chapters');
  return storedChapters ? JSON.parse(storedChapters) : [];
}

// Declare the array and assign it to the results of the getChapterList function
let chaptersArray = getChapterList() || [];

// Define the function to display each chapter in the list
function displayList(item) {
  const listItem = document.createElement('li');
  const deleteButton = document.createElement('button');
  
  // Populate the li element's textContent with the item value
  listItem.textContent = item;
  
  // Populate the button textContent with a ❌
  deleteButton.textContent = '❌';
  
  // Append the li element with the delete button
  listItem.appendChild(deleteButton);
  
  // Append the li element to the unordered list in your HTML
  list.appendChild(listItem);
  
  // Add an event listener to the delete button that removes the li element when clicked
  deleteButton.addEventListener('click', () => {
    list.removeChild(listItem);
    // Call the deleteChapter function to remove the chapter from the array and localStorage
    deleteChapter(item);
  });
}

// Use forEach to process each entry in chaptersArray and call displayList for each entry
chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', () => {
  const chapterText = input.value;
  
  // Check if the input is not blank
  if (chapterText.trim() !== '') {
    // Call displayList with the input.value argument
    displayList(chapterText);
    
    // Push the input.value into the chaptersArray
    chaptersArray.push(chapterText);
    
    // Update the localStorage with the new array by calling a function named setChapterList
    setChapterList(chaptersArray);
    
    // Set the input value to nothing
    input.value = '';
    
    // Set the focus back to the input
    input.focus();
  } else {
    // Provide a message or at least do nothing and return the focus to the input field
    alert('Please enter a chapter before adding.');
    input.focus();
  }
});

// Function to delete the chapter from the array and localStorage
function deleteChapter(chapter) {
  // Remove the chapter from the chaptersArray
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  
  // Update the localStorage with the updated array
  setChapterList(chaptersArray);
}

// Define the function to set the localStorage item
function setChapterList(chaptersArray) {
  localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}
