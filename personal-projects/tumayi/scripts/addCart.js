document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Add your logic to handle adding the product to the cart
            console.log("Product added to cart");
        });
    });
});
