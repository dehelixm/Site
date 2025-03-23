const products = [
    { id: 1, name: "Комбинезон", price: 2500, img: "images/jumpsuit.png", desc: "Теплый и мягкий комбинезон из органического хлопка." },
    { id: 2, name: "Боди", price: 1200, img: "images/bodysuit.png", desc: "Легкое боди с длинными рукавами и принтом листочков." },
    { id: 3, name: "Штанишки", price: 1500, img: "images/pants.png", desc: "Свободные штанишки на резинке из гипоаллергенного материала." },
    { id: 4, name: "Шапочка", price: 800, img: "images/hat.png", desc: "Уютная хлопковая шапочка, защищает от ветра." },
    { id: 5, name: "Плед", price: 2000, img: "images/blanket.png", desc: "Мягкий плед из флиса, отлично сохраняет тепло." }
];

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    if (productList) {
        products.forEach(product => {
            const item = document.createElement("div");
            item.className = "product";
            item.innerHTML = `<img src="${product.img}" alt="${product.name}">
                              <h2>${product.name}</h2>
                              <p>${product.desc}</p>
                              <p>Цена: ${product.price} руб.</p>
                              <button onclick="addToCart(${product.id})">Купить</button>`;
            productList.appendChild(item);
        });
    }
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} добавлен в корзину!`);
    }
}