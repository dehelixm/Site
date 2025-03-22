let cart = [];

const productImages = {
    "Комбинезон": "images/onesie.png",
    "Боди": "images/bodysuit.png",
    "Набор одежды": "images/clothing_set.png"
};

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
        let imageSrc = productImages[item.product] || "images/default.png";
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${imageSrc}" alt="${item.product}">
                <p>${item.product} - ${item.price} руб.</p>
                <button onclick="removeFromCart(${index})">Удалить</button>
            </div>
        `;
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