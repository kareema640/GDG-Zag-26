const productsGrid = document.getElementById('products-grid');
const cartCountElement = document.getElementById('cart-count');
let count = 0;
async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=12');
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error("Error ", error);
    }
}
function displayProducts(products) {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">$${product.price}</p>
            <button class="add-btn">Add to Cart</button>
        `;
        const btn = card.querySelector('.add-btn');
        btn.addEventListener('click', () => {
            count++;
            cartCountElement.textContent = count;
            btn.textContent = "Added!";
            btn.style.backgroundColor = "#27ae60";
            setTimeout(() => {
                btn.textContent = "Add to Cart";
                btn.style.backgroundColor = "black";
            }, 1000);
        });

        productsGrid.appendChild(card);
    });
}
fetchProducts();