const container = document.getElementById("postsContainer");

fetch("https://api.escuelajs.co/api/v1/products")
  .then((response) => response.json())
  .then((data) => {

    data.slice(0, 100).forEach((post) => {  

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${post.images[0]}" alt="${post.title}" width="100%">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <h4>$${post.price}</h4>
      `;

      container.appendChild(card);
    });

  })
  .catch((error) => {
    console.log("Error:", error);
  });
 