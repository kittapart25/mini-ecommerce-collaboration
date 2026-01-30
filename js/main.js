document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('searchInput');
    const loader = document.getElementById('loader');
    let allProducts = [];

    // แสดง loader (Dev A)
    loader.style.display = "block";

    // Fetch products from JSON
    fetch('js/products.json')
        .then(response => response.json())
        .then(data => {
            allProducts = data;
            displayProducts(allProducts);
            loader.style.display = "none"; // ซ่อน loader เมื่อโหลดเสร็จ
        });

    // Format price with comma separator (Dev A)
    function formatPrice(price) {
        return price.toLocaleString(); // ใส่ comma เช่น 12,600
    }

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>ราคา: ${formatPrice(product.price)} บาท</p>
            `;
            productList.appendChild(card);
        });
    }

    // Improved Search with validation (Dev B)
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // Validation: If search input is empty, show all products
        if (searchTerm === '') {
            displayProducts(allProducts);
            return;
        }
        
        const filteredProducts = allProducts.filter(product => {
            // Improved search with trimmed input
            return product.name.toLowerCase().includes(searchTerm);
        });
        displayProducts(filteredProducts);
    });
});
