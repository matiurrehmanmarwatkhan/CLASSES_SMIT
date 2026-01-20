function createNewElement(){
    let createParaEle = document.createElement("p");
    createParaEle.innerText = "Element Created!";
    createParaEle.setAttribute("class" , "para");
    document.body.appendChild(createParaEle)
}