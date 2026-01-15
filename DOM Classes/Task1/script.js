let heading = document.getElementsByTagName("h1");
console.log(heading);
let paragraph = document.getElementsByTagName("p")
console.log(paragraph);
let button = document.getElementsByTagName("button");
console.log(button);

for(let i = 0; i < heading.length ; i++){
    heading[i].style.color = "blue"
}
for(let p = 0; p < paragraph.length; p++){
    paragraph[p].style.color = "gray"
}
for(let b = 0 ; b < button.length; i++){
    button[b].style.backgroundColor = "green"
    button[b].style.Color = "white"
}

let para = document.getElementsByClassName("#para");
para.style.fontSize = "18px";
para.style.lineHieght = "1.5";
