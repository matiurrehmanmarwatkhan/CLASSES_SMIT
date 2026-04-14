//  type of object
// type UserDetailsType = {
//   name: string;
//   id: number;
//   email: string;
//   isActive: boolean;
// };
// const userDetails: UserDetailsType = {
//   name: "Mati Ur Rehman",
//   id: 1,
//   email: "matiurrehman@example.com",
//   isActive: true,
// };

// console.log(userDetails);

interface ProductInterface {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
const products: ProductInterface[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    imageUrl: "https://picsum.photos/200?random=1",
    price: 1200,
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    imageUrl: "https://picsum.photos/200?random=2",
    price: 3500,
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    imageUrl: "https://picsum.photos/200?random=3",
    price: 4200,
  },
  {
    id: 4,
    name: "Smart Watch",
    imageUrl: "https://picsum.photos/200?random=4",
    price: 6500,
  },
  {
    id: 5,
    name: "Laptop Stand",
    imageUrl: "https://picsum.photos/200?random=5",
    price: 1800,
  },
  {
    id: 6,
    name: "USB-C Hub",
    imageUrl: "https://picsum.photos/200?random=6",
    price: 2500,
  },
  {
    id: 7,
    name: "External Hard Drive",
    imageUrl: "https://picsum.photos/200?random=7",
    price: 7200,
  },
  {
    id: 8,
    name: "Webcam HD",
    imageUrl: "https://picsum.photos/200?random=8",
    price: 3100,
  },
  {
    id: 9,
    name: "Portable Speaker",
    imageUrl: "https://picsum.photos/200?random=9",
    price: 2800,
  },
  {
    id: 10,
    name: "LED Monitor",
    imageUrl: "https://picsum.photos/200?random=10",
    price: 18500,
  },
  {
    id: 11,
    name: "Mechanical Keyboard",
    imageUrl: "https://picsum.photos/200?random=11",
    price: 5400,
  },
  {
    id: 12,
    name: "Gaming Chair",
    imageUrl: "https://picsum.photos/200?random=12",
    price: 22000,
  },
  {
    id: 13,
    name: "Power Bank",
    imageUrl: "https://picsum.photos/200?random=13",
    price: 2000,
  },
  {
    id: 14,
    name: "Wireless Charger",
    imageUrl: "https://picsum.photos/200?random=14",
    price: 2300,
  },
  {
    id: 15,
    name: "Tablet Stand",
    imageUrl: "https://picsum.photos/200?random=15",
    price: 1500,
  },
  {
    id: 16,
    name: "Smartphone Tripod",
    imageUrl: "https://picsum.photos/200?random=16",
    price: 1700,
  },
  {
    id: 17,
    name: "Noise Cancelling Earbuds",
    imageUrl: "https://picsum.photos/200?random=17",
    price: 4800,
  },
  {
    id: 18,
    name: "Graphics Tablet",
    imageUrl: "https://picsum.photos/200?random=18",
    price: 9000,
  },
  {
    id: 19,
    name: "Router Dual Band",
    imageUrl: "https://picsum.photos/200?random=19",
    price: 6000,
  },
  {
    id: 20,
    name: "SSD 1TB",
    imageUrl: "https://picsum.photos/200?random=20",
    price: 12500,
  },
  {
    id: 21,
    name: "Microphone USB",
    imageUrl: "https://picsum.photos/200?random=21",
    price: 3700,
  },
  {
    id: 22,
    name: "VR Headset",
    imageUrl: "https://picsum.photos/200?random=22",
    price: 15000,
  },
  {
    id: 23,
    name: "Fitness Band",
    imageUrl: "https://picsum.photos/200?random=23",
    price: 3200,
  },
  {
    id: 24,
    name: "Smart Bulb",
    imageUrl: "https://picsum.photos/200?random=24",
    price: 1400,
  },
  {
    id: 25,
    name: "USB Flash Drive 64GB",
    imageUrl: "https://picsum.photos/200?random=25",
    price: 1100,
  },
  {
    id: 26,
    name: "Laptop Backpack",
    imageUrl: "https://picsum.photos/200?random=26",
    price: 2900,
  },
  {
    id: 27,
    name: "Wireless Gamepad",
    imageUrl: "https://picsum.photos/200?random=27",
    price: 4600,
  },
  {
    id: 28,
    name: "Smart Home Camera",
    imageUrl: "https://picsum.photos/200?random=28",
    price: 7800,
  },
  {
    id: 29,
    name: "Desk Lamp LED",
    imageUrl: "https://picsum.photos/200?random=29",
    price: 2100,
  },
  {
    id: 30,
    name: "Cooling Pad",
    imageUrl: "https://picsum.photos/200?random=30",
    price: 1900,
  },
];

const container = document.getElementById("productContainer") as HTMLDivElement;

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.className = "card";
  productCard.innerHTML = `

    <img src="${product.imageUrl}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>Price: Rs ${product.price}</p>
    <button> Add to Cart</button>
    `;
  container.appendChild(productCard);
});
