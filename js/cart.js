document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach(product => {
        const item = document.createElement("div");
        item.innerHTML = `<p>${product.name} - ${product.price} руб.</p>`;
        cartItems.appendChild(item);
    });
});