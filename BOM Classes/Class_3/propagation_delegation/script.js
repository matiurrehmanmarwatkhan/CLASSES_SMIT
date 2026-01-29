let fb_action = document.getElementById("post-actions");


fb_action.addEventListener("click", function(e){
    let action = e.target.name ;
    console.log(action);
    
    if(action === "like"){
        e.target.style.color = "blue";
        alert("You liked this post");
    } else if (action === "comment"){
        e.target.style.color = "green";
        alert("You commented on this post!");
    } else if (action === "share"){
        e.target.style.color = "red";
        alert("You shared this post!");
    }
})