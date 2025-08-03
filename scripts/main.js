import { products } from "./dashboard.js";
/*classes*/
class Product {
  constructor(src, name, desc, price, id) {
    this.source = src;
    this.name = name;
    this.description = desc;
    this.price = price;
    this.id = id;
  }
}
class ProductContainer {
  constructor() {
    this.wishlistProducts = [];
    this.shopProducts = [];
  }
  addShopProduct(product) {
    this.shopProducts.push(product);
  }
  addWishlistProduct(product) {
    this.wishlistProducts.push(product);
  }
  removeShopProduct(productId) {
    this.shopProducts = this.shopProducts.filter(
      (product) => product.id !== productId
    );
  }

  removeWishlistProduct(productId) {
    this.wishlistProducts = this.wishlistProducts.filter(
      (product) => product.id !== productId
    );
  }
}
const prevArrow = document.querySelector(".previous-icon");
const nextArrow = document.querySelector(".next-icon");
const joinBtn = document.querySelector(".join-submit");
let productContainer = new ProductContainer();
productContainer.shopProducts = [...products];
console.log(productContainer.shopProducts);
/*functions*/
function scrollOnXaxis(l) {
  const ftrProducts = document.querySelector(".ftr-prod-parent");
  const prodWidth = document.querySelector(".ftr-prod-img").clientWidth;

  if (
    ftrProducts.scrollLeft + ftrProducts.clientWidth >=
    ftrProducts.scrollWidth - 100
  ) {
    ftrProducts.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else if (ftrProducts.scrollLeft === 0 && !l) {
    ftrProducts.scrollTo({
      left: ftrProducts.scrollWidth,
      behavior: "smooth",
    });
  } else {
    ftrProducts.scrollBy({
      left: l ? prodWidth * 1.5 : -prodWidth,
      behavior: "smooth",
    });
  }
}
/*Event listners*/
if ((nextArrow, prevArrow, joinBtn)) {
  nextArrow.addEventListener("click", () => {
    scrollOnXaxis(true);
  });
  prevArrow.addEventListener("click", () => {
    scrollOnXaxis(false);
  });
  joinBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
