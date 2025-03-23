document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.innerHTML = "";
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Корзина пуста</p>";
    } else {
        cart.forEach((product, index) => {
            const item = document.createElement("div");
            item.className = "cart-item";
            item.innerHTML = `<img src="${product.img}" alt="${product.name}" width="50">
                              <p>${product.name} - ${product.price} руб.</p>
                              <button onclick="removeFromCart(${index})">Удалить</button>`;
            cartItems.appendChild(item);
        });
    }
});

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}