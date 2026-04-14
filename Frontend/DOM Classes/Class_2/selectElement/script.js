// let container = document.getElementsByClassName("container");
// let output = document.getElementsByClassName("output");
// console.log(container);
// console.log(output);
// console.log(container[0].innerHTML);
// console.log(container[0].innerText);

// console.log(container[2]);
// console.log(output[0]);

// output[0].innerHTML = container[0].innerHTML;
// console.log(output[0].innerHTML);
// console.log(output[0].innerText);

let paras = document.getElementsByClassName("para", "head");
// console.log(paras);
for(let i = 0; i < paras.length ; i++){
    if(i % 2 ==0){
        paras[i].style.color = "blue";
    }else{
        paras[i].style.color = "red";
    }
}
// console.log(paras);

let headings = document.getElementsByTagName("h1");
// console.log(headings);

// let para = document.querySelector(".para");
let para = document.querySelector("#head");
console.log(para);


