// create button click add card
let button = document.createElement("button")

button.innerText = "Add Cart";
button.setAttribute("onclick" , "addNewCard()")
button.setAttribute("class" , "buttones")
document.body.appendChild(button)

let galleryContainer = document.createElement("div");
galleryContainer.setAttribute("id" , "gallery")

document.body.appendChild(galleryContainer)

function addNewCard(){
    for(let i = 1 ; i <= 5 ; i++){
        
                let image = document.createElement("img");
                let card = document.createElement("div");
                let h3 = document.createElement("h3");
                let buyButton = document.createElement("button");
                buyButton.setAttribute("onclick" , "buybuttons()");
        // image
        image.setAttribute("src" , "image/Illustration (1).png");
        image.setAttribute("alt" , "Picture");
        image.setAttribute("class" , "card-image");
        card.appendChild(image)


    // h3
        h3.innerText = "Card Title";
        h3.setAttribute("class" , "card-title");
        card.appendChild(h3);



    // button
    buyButton.innerText = "Buy";
    buyButton.setAttribute("class" , "btnBuy");
    buyButton.setAttribute("title" , "Add to cart");
    card.appendChild(buyButton);


    // append card to gallery
    galleryContainer.appendChild(card);
    }
    
}
    
