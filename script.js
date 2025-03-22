let cart = [];

const productDetails = {
    "Комбинезон": {
        "image": "images/onesie.png",
        "description": "Мягкий хлопковый комбинезон для малышей. Дышащий материал, удобные застежки и стильный дизайн.",
        "price": 1500
    },
    "Боди": {
        "image": "images/bodysuit.png",
        "description": "Уютное боди из органического хлопка. Подходит для повседневной носки и сна.",
        "price": 1200
    },
    "Набор одежды": {
        "image": "images/clothing_set.png",
        "description": "Комплект из кофточки и штанишек, идеально подходит для прогулок и отдыха дома.",
        "price": 2200
    }
};

function addToCart(product) {
    const price = productDetails[product].price;
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
        let imageSrc = productDetails[item.product].image || "images/default.png";
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

function showProductDetails(product) {
    const details = productDetails[product];
    const modal = document.getElementById("product-modal");
    document.getElementById("modal-image").src = details.image;
    document.getElementById("modal-title").innerText = product;
    document.getElementById("modal-description").innerText = details.description;
    document.getElementById("modal-price").innerText = `Цена: ${details.price} руб.`;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("cart-items")) {
        loadCart();
    }
});