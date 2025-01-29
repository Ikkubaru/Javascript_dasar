const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
  ];
  
  function getProductsByCategory(products, category) {
    /**
     * Menggunakan metode `.filter()` untuk membuat array baru
     * yang hanya berisi produk yang sesuai dengan kategori yang diberikan.
     * `.filter()` mengembalikan array baru tanpa mengubah array asli.
     */
    return products.filter(product => product.category === category);
  }
  
  function findProductById(products, id) {
    /**
     * Menggunakan metode `.find()` untuk mencari produk dengan ID yang cocok.
     * `.find()` mengembalikan referensi objek dari array tanpa mengubah array asli.
     */
    return products.find(product => product.id === id);
  }
  
  function calculateTotalPrice(products) {
    /**
     * Menggunakan metode `.reduce()` untuk menghitung total harga semua produk.
     * `.reduce()` mengiterasi array dan mengakumulasikan total harga tanpa mengubah array asli.
     */
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  function applyDiscount(products, discount) {
    /**
     * Menggunakan metode `.map()` untuk membuat array baru dengan harga yang sudah dikurangi diskon.
     * `.map()` memastikan bahwa array asli tetap tidak berubah dengan mengembalikan objek baru.
     */
    return products.map(product => ({
      ...product, // Spread operator untuk membuat salinan objek produk
      price: product.price - (product.price * (discount / 100)), // Mengurangi harga dengan persentase diskon
    }));
  }
  
  // Test cases
  console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Output: Produk dengan id 1 dan 2
  console.log(calculateTotalPrice(sampleProducts)); // Output: 1830
  console.log(applyDiscount(sampleProducts, 10)); // Output: Produk dengan harga yang sudah dikurangi 10%
  console.log(findProductById(sampleProducts, 3)); // Output: Produk dengan id 3
  