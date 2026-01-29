
// let msg = document.getElementById("msg");

// function showNotification(){
//     msg.style.display = "block"
//     setTimeout(()=>{
//     msg.style.display = "none";
//     } , 3000
//     )
// }


// function removecookies(){
//     msg.style.display = "none"
// }


let clock = document.getElementById("clock");

let clockInternal = setInterval(()=>{
    let date = new Date() ;
    let mints = date.getMinutes();
    let hours = date.getHours();
    let second = date.getSeconds();
    clock.innerText = `${hours} : ${mints} : ${second}`;
}
);