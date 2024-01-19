const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapterText = input.value;
    
    // Check if the input is not blank
    if (chapterText.trim() !== '') {
      const listItem = document.createElement('li');
      const deleteButton = document.createElement('button');
      
      // Populate the li element's textContent with the input value
      listItem.textContent = chapterText;
      
      // Populate the button textContent with a ❌
      deleteButton.textContent = '❌';
      
      // Append the li element with the delete button
      listItem.appendChild(deleteButton);
      
      // Append the li element to the unordered list in your HTML
      list.appendChild(listItem);
      
      // Add an event listener to the delete button that removes the li element when clicked
      deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
      });
      
      // Send the focus to the input element
      input.focus();
      
      // Change the input value to nothing or the empty string to clean up the interface for the user
      input.value = '';
    } else {
      // Provide a message or at least do nothing and return the focus to the input field
      alert('Please enter a chapter before adding.');
      input.focus();
    }
  });
  