const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    productImage: "https://images.unsplash.com/photo-1516707890421-6b1c9b0f6d7b",
    price: 59.99,
    category: "Electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    title: "Smart Watch Series 8",
    productImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: 129.99,
    category: "Wearables",
    rating: 4.3,
    inStock: true
  },
  {
    id: 3,
    title: "Gaming Mechanical Keyboard",
    productImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    price: 89.99,
    category: "Accessories",
    rating: 4.7,
    inStock: false
  },
  {
    id: 4,
    title: "DSLR Camera Canon Pro",
    productImage: "https://images.unsplash.com/photo-1519183071298-a2962be96f13",
    price: 499.99,
    category: "Cameras",
    rating: 4.8,
    inStock: true
  },
  {
    id: 5,
    title: "Nike Running Shoes",
    productImage: "https://images.unsplash.com/photo-1528701800489-20be9c1c89b5",
    price: 79.99,
    category: "Fashion",
    rating: 4.4,
    inStock: true
  },
  {
    id: 6,
    title: "Leather Office Chair",
    productImage: "https://images.unsplash.com/photo-1582582494700-ecf7c3b6cbbf",
    price: 199.99,
    category: "Furniture",
    rating: 4.2,
    inStock: false
  },
  {
    id: 7,
    title: "Apple MacBook Air M2",
    productImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    price: 999.99,
    category: "Laptops",
    rating: 4.9,
    inStock: true
  },
  {
    id: 8,
    title: "Kitchen Blender Machine",
    productImage: "https://images.unsplash.com/photo-1585238342028-4f56d11b1d0b",
    price: 49.99,
    category: "Home Appliances",
    rating: 4.1,
    inStock: true
  },
  {
    id: 9,
    title: "Wooden Study Table",
    productImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    price: 149.99,
    category: "Furniture",
    rating: 4.6,
    inStock: true
  },
  {
    id: 10,
    title: "Portable Speaker JBL",
    productImage: "https://images.unsplash.com/photo-1518441982496-2d17b9c0d1b0",
    price: 39.99,
    category: "Audio",
    rating: 4.3,
    inStock: false
  }
];

// console.log(products);


let product = products.filter((item)=>{
    return item.price <= 200;
});

// console.log(product);

let productCategory = products.map((item)=> {
    return item.category
})

// console.log(productCategory);

let productId = products.map((item)=>{
    return item.id;
})
let productrating = products.map((item)=>{
    return item.rating;
})
let productstock = products.map((item)=>{
    return item.inStock;
})

// console.log(productId);
// console.log(productrating);
// console.log(productstock);

// for (let i = 0 ; i <products.length; i++){
//     if(products[i].inStock === false){
//         console.log("out of stock " , products[i]);   
//     }
// }


// let allStock = false;

// for(let i =0 ; i <products.length; i++){
//     if(products[i].inStock === false){
//         allStock = false ;
//         break;
//     }
// }
// console.log(allStock);



let sumprice = products.reduce((accamulator, current)=> accamulator + current.price , 0) 
// console.log(Math.floor(sumprice));


// find methods
let findproduct = products.find((item) => item.id === 4);
console.log(findproduct);

// fill methods
