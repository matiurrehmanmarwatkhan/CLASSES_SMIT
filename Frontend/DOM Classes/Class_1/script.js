let body = document.getElementById("body");
body.style.backgroundColor = "black"
body.style.textAlign = "center"
let heading  = document.getElementById("heading");
heading.style.color = "pink";
heading.innerHTML = "Welcome To DOM JavaScript";
console.log(body);
console.log(heading);


function changeText(){
    let btn = document.getElementById("btn");
    btn.style.backgroundColor = "green";
    body.style.backgroundColor = "pink";
}
