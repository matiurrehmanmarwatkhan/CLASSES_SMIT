// let parentEL= document.getElementById("parentEl");


// function addClass(){
//     parentEL.classList.add("box")
// }

// function removeClass(){
//     parentEL.classList.remove("box")
// }






// Light mode
let changeModeBtn = document.getElementById("changeModeBtn");
function changeMode(){
    let body = document.body;
    let isLight = body.classList.contains("light-mode");
    if (isLight == true){
        changeModeBtn.innerText = "Light Mode"
        body.classList.add("dark-mode")
        body.classList.remove("light-mode")
    }else{
        changeModeBtn.innerText = " Dark Mode"
        body.classList.add("light-mode");
        body.classList.remove("dark-mode")
    }
}