// let products = [
//   {
//     id: 1,
//     title: "Apple iPhone 15",
//     price: 250000,
//     category: "Mobile",
//     rating: {
//       rate: 4.8,
//       count: 120
//     },
//     image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBMQERIPFRUQERIQEA8VDw8QFhUQFRIWFhUVFRYYHSggGBslHRMXITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGxAPGC0dHSUtLSsrLSsrKy0rLS0tKystLS0tKzctKysrLS0tLS0rLTctLSsrNy0tNy0rKystKy0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcCAwj/xABHEAACAQMCAgMKCQoFBQAAAAAAAQIDBBEFIQYSMUFRBxMiYXFyc4GxwSQyMzRikaGywhQWI0Jjg5Kz0dJSVIK000NTosPw/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABoRAQEBAQEBAQAAAAAAAAAAAAABETECQRL/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPxdqztLOrcJZcVGMV9Kc4wX1c2fUBsapq9G3pzq1XiFOLlOb2jFLtb92Sh0e7Xpzm1Kjexp9Vx3nMGu1JPmx6itcX6tVvbO1pVW8XN5Pnguh0rel3zla7HJr6kQllbQ743LGI7JdRj9NTy7hofF+n3i+DXVGbxnk51Gaz2wlhr6icOC3Gi2lbepSg5Z+OlySyt880cNHweu1rCrGlR1WrTeOdW9ync0uV5SXO1mC27Sz0t8Y/QIOWaZ3TL2EU7qzhXhhP8AKbGsqqfjVKW/1MtWjd0LS7mXJG5hTqZx3msnbzz2YnjPqLrOLSDEZJrKaafQ1uZKgAAAAAAAAAAAAAAAAAAAAAAAAAABW+6BT5rJxxnNSnt0dEs+4shBcZfNl6SHvJeEcq1O3aqabBpY75fNJZ6e8IrNS45a01nonJfaXTVF8L0xftL7+Qig8VU3SvK0Xt4bkvJLde0x9bTlrfEJxRoE7qoq1KcOblUZwk2s4zhppPtxualreEtb3g4u6pk9MvrWXOo16eOmpTbax50Hj6zo+gYu7KlK6pwqNp5c6cd0pNRlv0NxSef6mba4ZZeG9Ldy3J1IwpwfK5dcpNJ8sV19X1rtFurJiM0/Tqlu+axuri2a3VLndag9+iVKbe3kaxk6fwZxDK8oyVWEadxQkqdzSi248zWY1Kbe7hNbrPRunumQVXTLalmL5n1OTk8/Uj3pMaNC4dxTlJOdJUZwltGUVNyi28ZynKWN/wBd7dGHm36z6z4vQI2hrEH0prxpqa+zf7Ddo3MJfFlF+LO/1dJvWH1ABQAAAAAAAAAAAAAAAAAAAAACD4v+br0kPYycITi35Bekj7GS8I51qb+G6Z4ql+vqo49xB91LScqF1FdH6Op5P1W/tRNanDF5pi3+PfNt9bdDLbJ3UqEalOVOaTU48sk+xnK3LHWTY4FTngk7S43McS6NO1rODy4vLpz7Y/1RH29Tc6dYWildbdJNcIV6kr6gnJ97jNS5erZZfsKfSr7IuvBdCMqlGTy8822Xj9bsM1ddCcISpynNtc1RQz0NJvG3/wB1nCdY4tvpXM69GrOFONSSo0lvBU08R5k/jNpZbe+52LWXP8i8D4yquUV2uD5kvsOIa5QdCc6Uk1GTdSi2sZpybxh9qzytdsTXiJXZuDdW/LbenWiuWcsxqRTxicXiXq6/IyyLnjLlnvsnnxdpzPuXylQsk5PldWrKpTT6cPEY4XXnlz48l+ttaVerGL5MxkoTxUU229nt+rs+glhE1SvakeiT8j3X2m/a6tviokvpLo9a95CmcmZbFxbgaOj1eaks/qtx9S3X2NG8dYwAAAAAAAAAAAAAAAAAAAQvFnyC9LH2MmiF4s+QXpY+xkvCObaxL4Zpz/a6h/KZN1qq7Sva62rrTW9s1L5tZ6M0s4z6zeq3By9R18tbXNOp3NN0547YS60+05PfWFS3qunNYa6H1NdqOsyuDQ1jTadzDllhSWXCa6Yv+niHm4Wa5rGodG4B6aD8UvxHO9Rs50ZunNYa+prtXiOldzyn4FCX0Ze2RusRcU1+T79HfZlM1z8ndSNGdxSUm0429XvMnl9DUKifK36my4UbyNOhzvDca2yfa5xj+Jn551Lvteda5nludabqNpvEm28N9Wy+weZpXUtauI21ndVI8zrKgo0qje8XN06c5Lsa75Lc5bpF9Vsq9K5p5jKDjNLoU6ez5X2pr3MvOgZvbCKqSbcHUtqss7uDhhPL6ZJSg12uPjKvDhO8nXjbeDKLmqca6qQlTw5YzHfP+npNTPqV+g6VdTipromlNeSSyvaesnxoUVTjGmv1IqH8Kx7j3k5NLBw9LwJr6f4V/QlSI4cfgT89fdRLnWcZoACoAAAAAAAAAAAAAAAAEJxd8gvSw9jJsg+MPm69LD3kvFjl/ELzdaf6W/8AqVPHuM3dQxrCbutOysZqX8sbbJ0sr17jUI4ObTQlcHqlc7kfXmfCFfDGLKkNZsqdzT5XhSWXCfWn/QsvBdi6VvbKXxuSWfLmZTnctF70Grmla+OEl6/DfuINPWqTSnTbajNtprqyuleNPf1I5nxJw7WjVlKhKlONduc6aq04OFRvMtpNZi3umujOH0HZ7mjGaakjQq6TB/qU348OL+zb7DcuM2KjoVo7HTKssRnOEKteS35XPlzjxpJJeo2u5tdK7cas6dNVKdxGEpRTSa8GSkk842f2Fldq0scrxjDWIzTXZ1GdB0+nbpxo0o0o5ctly+FJYbx242JaJqpLMm+1t/aeMnnIyZVYuGviT89fdRMELwx8Sfnr7qJo6zjNAAVAAAAAAAAAAAAAAAAAgeM/my9LD2MniB40+bL0sPYyXhHNtSWbzTV9K9/kI+2qUj53a+Hab519/tzf1WHSYaUu9WGRrluS2oIhaj3KrNSqX7hirmlaf6l/4VTm9aZfeEZ/o7Xyy+5UM0WyT3CZ4k9wmVH1TM5PmmZyRXvJjJ4yMgWbhZ+BPz191E2QfCj8Cp56+6icOk4xQAFAAAAAAAAAAAAAAAAAgONfm37yPsZPlf43+ar0sPYyXhHO6r+Hab519/tyS1nrIurLF9pvnX3+3N/WJ9JlpT9SluQlR7ktqct2QdWW4HxryL7wXLMLfxRnj1uWfYvqOeXEi+8Dz8G382XtkSkXGTCZ5bMZKPpzHlVHzeLGc9r8RrXsvBXlNWjvJLxgS2THMeMmMgWvhF/o6nnr7qJ4gOD/AJOp6RfdRPmozQAFAAAAAAAAAAAAAAAAAr/HHzX95D3lgK9xz81/eQ95LwjmV1Nq701vGc3mcdGfydZwffVrjpNHV6mLnT39K8/ko1dUueky0itRqEHVnubd7cEXKpuWI815F74EqfIL6MvxHPq0i98Ay3o+bL8RPSxepMxk8NmOYDNeOYtetGlGMsrZrfbY3cjmCPpzGOY8cxjmCrhwa/0dT0n4UWErnBT/AEVT0n4IljNRkABQAAAAAAAAAAAAAAAAK7x380/ew95Yit8fv4H+9p+1kvCOScR1MVrF/Su/5SIfUbnpN3i2eJ2T+ldfy4lbvrgzFrVuK25qqW55qTPMHuaGajL5wGt6Pmv8RVdJ0StcvEIvlXxpteDHys6HommqhOjFPOIYz2vEsmfSxONmOY8tnnJR9eYcx88jIHtyMcx4bMZAu3A7/RVPS/giWQrPAj/Q1PS/giWYsZAAUAAAAAAAAAAAAAAAACs90N/An6Wn7WWYq/dGfwF+lp+0lHFONJ/M39O5+5AqdxUyyy8by8G0f07n7kCv6VplW6rRo0Y8059C6El1tvqS7SRWrSpSnJRinKUnhRSbbfiR0Lhzucy2q3jcVjKoLZ/6n1eRFs4a4Zt9Pp83gzrNPnrNdHaoLqXtPeo6nvsyWtSNa+qU6NPvdKKjFLCSSXUfCxnzKi/FL2yIXVbzOTa0O4yqS8UvxEomMmMnnJjJpHvIyfPIyB7yYyeMmMgXvgL5Gr6X8ESzlW7n/wAjV9L+CJaTUZAAAAAAAAAAAAAAAAAAAKp3TJYsJP8Aa0vvFrKn3UJY06cttqlLp89L3kvBwvjKWYWnn3P3IFx7ndnC2tXXaXfLjfPWqS6I+LOM+tFN4iqc6s1t8pcZwv2cf6Fpq6goQhSj+pCMdm+pLZmfjUSuo6o3ncgbm9y+n3GlcXuesjp3W/qGLrZvrg2+G7rNSnHy+xkFcVtjZ4buEq8PL7mWovqYyeExkD1kxk85MZA9ZMZPDZjIHQO578hV9N+CJaip9zr5Cr6b/wBcC2FjIACgAAAAAAAAAAAAAAAAQfG2lu6sLihH40oKUF2zpyU4r1uOPWTgA/NWsaHXoUIV5Rk40KyqTeG8U5RcZv1Lf1GlrNzialF5hOKlGSeU01056z9D6vobqKSpzhFTWJ050++QkvU019pzu87iym3yV3STbfeoVJd7TfS4xlB8vqZmRrXLZXuT5Ovv5Tpq7hsv83P+Jf8AGZfcPl/m5/xL/jKjmE5m5oVnVnUU6cXLkkuZLfG+x0ZdxSf+bl9cf+M3tG7lt1aVVWt7uGccsozXNGceyS5PXnpII2GUkmmmtmn1NbNGclyuOFLqq+arK15tsuHfY5wuvbp9R8vzGq/46f8AHL+wCoZMNlv/ADGqf46f8cv7B+YlT/HD+OX9gFObMcxcfzDqf9yH8Uv7DYs+AoqSdWo2l0wj1+Lm2wMEjwDbuNnzP/q1J1F5NoL7hZDzSpqMVGKSUUoxitkklhJHo0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"
//   },

//   {
//     id: 2,
//     title: "Dell Gaming Laptop",
//     price: 180000,
//     category: "Electronics",
//     // rating missing
//     image: "data:image/jpeg;base64,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"
//   },

//   {
//     id: 3,
//     title: "Bluetooth Headphones",
//     // price missing
//     category: "Accessories",
//     rating: {
//       rate: 4.2,
//       count: 80
//     }
//     // image missing
//   }
// ];

// let container = document.getElementById("product-container");

// products.forEach((item) =>{
//     let card = ` <div class = "card">
//       <img 
//         src="${item?.image ?? ""}" 
//         alt="product"
//       />

//       <h2>${item?.title ?? "No Title Available"}</h2>

//       <p class="price">
//         Price: Rs ${item?.price ?? "Not Available"}
//       </p>

//       <p>
//         Category: ${item?.category ?? "Unknown"}
//       </p>

//       <p class="rating">
//         Rating: ${item?.rating?.rate ?? "No Rating"} ⭐
//       </p>

//       <p>
//         Reviews: ${item?.rating?.count ?? 0}
//       </p>

//       <button onclick = "alert()">
//         Add to Cart
//       </button>

//     </div> `
//     container.innerHTML += card ;
// });

// function alert(){
//     alert("Cart Succesfully Added")
// }

// let container = document.getElementById("product-container");

// products.forEach((item) => {

//   let card = `
//     <div class="card">

//       <img 
//         src="${item?.image ?? "https://via.placeholder.com/150"}" 
//         alt="product"
//       />

//       <h2>${item?.title ?? "No Title Available"}</h2>

//       <p class="price">
//         Price: Rs ${item?.price ?? "Not Available"}
//       </p>

//       <p>
//         Category: ${item?.category ?? "Unknown"}
//       </p>

//       <p class="rating">
//         Rating: ${item?.rating?.rate ?? "No Rating"} ⭐
//       </p>

//       <p>
//         Reviews: ${item?.rating?.count ?? 0}
//       </p>

//       <button>
//         Add to Cart
//       </button>

//     </div>
//   `;

//   container.innerHTML += card;
// });




const username = undefined;
const displayName = username ?? "Guest";

console.log(displayName);
