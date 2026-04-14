const container = document.getElementById("productContainer");
const loading = document.getElementById("loading");

async function fetchProducts() {
  try {
    loading.style.display = "block";

    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();

    loading.style.display = "none";

    data.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${product.images[0]}" />
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    loading.innerText = "Something went wrong!";
  }
}

fetchProducts();
