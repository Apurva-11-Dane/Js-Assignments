// Create the book object
let book = {
  title: "Wings of Fire",
  author: "APJ Abdul Kalam",
  isAvailable: true // Initial availability status
};

// Function to check and update availability
function updateAvailability(book) {
  if (book.isAvailable) {
    console.log(`The book "${book.title}" by ${book.author} is currently available.`);
    // Updating the status to unavailable
    book.isAvailable = false;
  } else {
    console.log(`The book "${book.title}" by ${book.author} is not available.`);
    // Updating the status to available
    book.isAvailable = true;
  }
}

// Check and update the availability
updateAvailability(book);

// Print the updated book object
console.log("Updated book object:", book);
