// Create the cart object
let cart = {
    itemName: "Mobile",
    quantity: 1,
    price: 25000,
    discount: 10, // Default discount
    calculateTotalCost: function() {
      return this.quantity * this.price * (1 - this.discount / 100); // Apply discount if any
    }
  };
  
  // Update the quantity
  cart.quantity = 3; // Let's assume the quantity is updated to 3
  
  // Add a discount property
  cart.discount = 20; // Assuming a 10% discount
  
  // Calculate the total cost and print the cart object
  console.log("Updated cart object:", cart);
  console.log("Total cost after discount:", cart.calculateTotalCost());
  