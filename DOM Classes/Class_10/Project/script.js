let product_form = document.getElementById("product_form");
let product_list = document.getElementById("product_list");

let products = JSON.parse(localStorage.getItem("products")) || [];


product_form.addEventListener("submit", function (e) {
  e.preventDefault();

  let product_url = product_form.product_url.value.trim();
  let title = product_form.title.value.trim();
  let desc = product_form.desc.value.trim();
  let price = product_form.price.value.trim();

  if (!product_url || !title || !desc || !price) {
    alert("All fields are required");
    return;
  }

  let product_data = {
    product_url,
    title,
    desc,
    price,
  };

  products.push(product_data);
  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();
  product_form.reset();
});

function displayProducts() {
  product_list.innerHTML = "";

  products.forEach((product) => {
    product_list.innerHTML += `
      <div class="product-card">
        <img src="${product.product_url}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.desc}</p>
        <strong>$${product.price}</strong>
        <button>Add to Cart</button>
      </div>
    `;
  });
}

displayProducts();




