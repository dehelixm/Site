let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product} добавлен в корзину!`);
}

function loadCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.product} - ${item.price} руб. <button onclick="removeFromCart(${index})">Удалить</button></p>`;
    });

    totalPrice.innerText = `Итого: ${total} руб.`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Ваша корзина пуста!");
        return;
    }
    alert("Ваш заказ оформлен!");
    localStorage.removeItem("cart");
    cart = [];
    loadCart();
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("cart-items")) {
        loadCart();
    }
});