let form = document.getElementById("userForm");
form.addEventListener("submit" , (event) =>{
    event.preventDefault();
    let username = event.target.username.value;
    let email = event.target.email.value;


let userCredinatails ={
    username : "Mati Ur Rehman",
    email : "matiurrehmanmarwatkhan@gmail.com",
}
console.log(email.value);

if (!username || !email) {
    alert("Please fill in all required fields.");
} else if (userCredinatails.username !== username.trim()){
    alert("invalid Credentials");
}
 else if (userCredinatails.email !== email.trim()){
    alert("invalid Credentials");
}
    else{
        alert("Form submitted successfully!");
    }
});