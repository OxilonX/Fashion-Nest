const products = JSON.parse(localStorage.getItem("products"));
const wishlistProducts = [];
if (products) console.log(products);
const prevArrow = document.querySelector(".previous-icon");
const nextArrow = document.querySelector(".next-icon");
const joinBtn = document.querySelector(".join-submit");
const wishlistBtn = document.querySelectorAll(".fav-icon-overlay");

function createProductItem(name, desc, price, imageSrc) {
  const li = document.createElement("li");
  li.className = "shop-child";

  const imageContainer = document.createElement("div");
  imageContainer.className = "shp-child-image-container";

  const mainImage = document.createElement("img");
  mainImage.src = imageSrc;
  mainImage.alt = name;
  mainImage.className = "shp-child-img";

  const favIcon = document.createElement("img");
  favIcon.src = "icons/icons8-favourite-30.png";
  favIcon.alt = "";
  favIcon.className = "fav-icon-overlay";

  const infoIcon = document.createElement("img");
  infoIcon.src = "icons/icons8-info-60.png";
  infoIcon.alt = "";
  infoIcon.className = "info-icon-overlay";

  const addToCartButton = document.createElement("button");
  addToCartButton.className = "shp-child-btn-overlay";
  addToCartButton.textContent = "Add to Cart";

  imageContainer.appendChild(mainImage);
  imageContainer.appendChild(favIcon);
  imageContainer.appendChild(infoIcon);
  imageContainer.appendChild(addToCartButton);

  const infoContainer = document.createElement("div");
  infoContainer.className = "shp-child-infos";

  const titlesContainer = document.createElement("div");
  titlesContainer.className = "shp-child-titles";

  const productName = document.createElement("h1");
  productName.className = "shp-child-name";
  productName.textContent = name;

  const productDesc = document.createElement("p");
  productDesc.className = "shp-child-desc";
  productDesc.textContent = desc;

  titlesContainer.appendChild(productName);
  titlesContainer.appendChild(productDesc);

  const pricesContainer = document.createElement("div");
  pricesContainer.className = "shp-child-prices";

  const productPrice = document.createElement("h4");
  productPrice.className = "shp-child-price";
  productPrice.textContent = `$${price}`;

  const productDiscount = document.createElement("span");
  productDiscount.className = "shp-child-discount";
  productDiscount.textContent = `$19.99`;

  pricesContainer.appendChild(productPrice);
  pricesContainer.appendChild(productDiscount);

  infoContainer.appendChild(titlesContainer);
  infoContainer.appendChild(pricesContainer);

  li.appendChild(imageContainer);
  li.appendChild(infoContainer);

  return li;
}
function loadProducts() {
  const productGrid = document.querySelector(".shop-grid");
  products.forEach((prod) => {
    let prodElem = createProductItem(
      prod.name,
      prod.desc,
      prod.price,
      prod.source
    );

    productGrid.append(prodElem);
  });
}
window.onload = () => {
  if (products) loadProducts();
};
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
