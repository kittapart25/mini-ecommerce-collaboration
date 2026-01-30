document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('searchInput');
<<<<<<< HEAD
    let allProducts = [];

=======
    const loader = document.getElementById('loader');
    let allProducts = [];

    // แสดง loader
    loader.style.display = "block";

>>>>>>> 98d29cfd3aa7e235f22c095d8cbb1c73ce3e79e0
    // Fetch products from JSON
    fetch('js/products.json')
        .then(response => response.json())
        .then(data => {
            allProducts = data;
            displayProducts(allProducts);
<<<<<<< HEAD
        });

    function displayProducts(products) {
        productList.innerHTML = ''; // Clear previous list
=======
            loader.style.display = "none"; // ซ่อน loader เมื่อโหลดเสร็จ
        });

    function formatPrice(price) {
        return price.toLocaleString(); // ใส่ comma เช่น 12,600
    }

    function displayProducts(products) {
        productList.innerHTML = '';
>>>>>>> 98d29cfd3aa7e235f22c095d8cbb1c73ce3e79e0
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
<<<<<<< HEAD
                <p>ราคา: ${product.price} บาท</p>
=======
                <p>ราคา: ${formatPrice(product.price)} บาท</p>
>>>>>>> 98d29cfd3aa7e235f22c095d8cbb1c73ce3e79e0
            `;
            productList.appendChild(card);
        });
    }

<<<<<<< HEAD
    // Inefficient Search
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = allProducts.filter(product => {
            // Simple search, not very efficient
            return product.name.toLowerCase().includes(searchTerm);
        });
=======
    // Search (ของ Dev B จะมาปรับต่อ)
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
>>>>>>> 98d29cfd3aa7e235f22c095d8cbb1c73ce3e79e0
        displayProducts(filteredProducts);
    });
});
