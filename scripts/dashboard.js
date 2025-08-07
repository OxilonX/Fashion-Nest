class Product {
  constructor(name, desc, price, source) {
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.source = source;
    this.id = this.generateUniqueId();
  }

  generateUniqueId() {
    return `id-${Math.random().toString(36).substr(2, 9)}`;
  }
  addProduct(products) {
    products.push(this);
  }
}
const products = [];
const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const prodName = document.getElementById("product-name").value;
  const prodDesc = document.getElementById("product-description").value;
  const prodPrice = document.getElementById("product-price").value;
  const prodImg = document.getElementById("product-image");

  if (prodImg.files.length > 0) {
    const file = prodImg.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const dataUrl = e.target.result;
      const product = new Product(prodName, prodDesc, prodPrice, dataUrl);
      product.addProduct(products);
      localStorage.setItem("products", JSON.stringify(products));
    };
    reader.readAsDataURL(file);
  }
});
