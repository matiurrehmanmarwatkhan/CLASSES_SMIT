const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let isValid = true;

    const fields = [
        { id: "name", message: "Name is required" },
        { id: "email", message: "Email is required" },
        { id: "service", message: "Service is required" },
        { id: "budget", message: "Budget is required" },
        { id: "message", message: "Message is required" }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = input.nextElementSibling;

        if(input.value.trim() === ""){
            error.textContent = field.message;
            isValid = false;
        } else {
            error.textContent = "";
        }
    });

    if(isValid){
        alert("Form submitted successfully!");
        form.reset();
    }
});
