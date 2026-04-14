const getproducts = async () =>{
    try{
        const response = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.log(error);
    }
}

getproducts();


// const products = async () =>{
//     const response = await fetch ("https://api.escuelajs.co/api/v1/products")
//     const data = await response.json();
//     console.log(data);
// }
// products();
console.log("skfsdfnskjcnscdkfh");
setTimeout(() =>{
    console.log("Mati UR Rehman");
})