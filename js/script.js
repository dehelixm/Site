const products = [
    { id: 1, name: "Комбинезон", price: 2500 },
    { id: 2, name: "Боди", price: 1200 },
    { id: 3, name: "Штанишки", price: 1500 },
    { id: 4, name: "Шапочка", price: 800 },
    { id: 5, name: "Плед", price: 2000 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const item = document.createElement("div");
        item.innerHTML = `<p>${product.name} - ${product.price} руб. <button onclick="addToCart(${product.id})">Купить</button></p>`;
        productList.appendChild(item);
    });
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(products.find(p => p.id === id));
    localStorage.setItem("cart", JSON.stringify(cart));
}