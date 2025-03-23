document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Корзина пуста</p>";
        cartTotal.innerText = "";
    } else {
        cart.forEach((product, index) => {
            total += product.price;
            const item = document.createElement("div");
            item.className = "cart-item";
            item.innerHTML = `<img src="${product.img}" alt="${product.name}" width="50">
                              <p>${product.name} - ${product.price} руб.</p>
                              <button onclick="removeFromCart(${index})">Удалить</button>`;
            cartItems.appendChild(item);
        });
        cartTotal.innerText = `Итого: ${total} руб.`;
    }
});

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function placeOrder() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Ваша корзина пуста!");
        return;
    }
    alert("Заказ оформлен! Мы свяжемся с вами для уточнения деталей.");
    localStorage.removeItem("cart");
    location.reload();
}