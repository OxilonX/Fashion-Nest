const submit = document.getElementById("submit");
const prodName = document.getElementById("product-name");
const prodDesc = document.getElementById("product-description");
const prodPrice = document.getElementById("product-price");
const prodImg = document.getElementById("product-image");
let products = [];
let product = {
  name: "",
  desc: "",
  price: "",
  source: "",
};
if (submit) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (prodName && prodDesc && prodPrice && prodImg.files.length > 0) {
      product.name = prodName.value;
      product.desc = prodDesc.value;
      product.price = prodPrice.value;
      product.source = prodImg.src;
      const reader = new FileReader();
      reader.onload = function (e) {
        product.source = e.target.result;
        products.push(product);
        console.log(products);
      };

      reader.readAsDataURL(prodImg.files[0]);
    }
  });
}

export { products };
