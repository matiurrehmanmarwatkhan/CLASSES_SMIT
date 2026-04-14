let userDetail = {
    name : "Mati Ur Rehman",
    age : 18 ,
    email : "matiurrehmanmarwatkhan@gmail.com",
    city : "new York",
}


let convertObjectToStringfy = JSON.stringify(userDetail);

console.log(convertObjectToStringfy);

localStorage.setItem("user_detail" , convertObjectToStringfy);

let getData  = JSON.parse(localStorage.getItem("user_detail"));

console.log(getData);


function removeData(){
    localStorage.clear("user_detail")
}