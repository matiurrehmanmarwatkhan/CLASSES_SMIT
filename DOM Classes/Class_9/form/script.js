let form = document.getElementById("admissionForm");
let error = document.getElementById("error");

form.addEventListener("submit" ,function(event){
    event.preventDefault();

    let formData = new FormData(form);
    console.log(formData);
    formData.get("student_name");
    formData.get("father_name");
    formData.get("phone");
    formData.get("dob");
    formData.get("profile_image");
    formData.get("gender");
    formData.get("address");
    formData.get("cv");
    formData.get("city");
    formData.get("acknowledgement");


    let name = event.target.student_name.value;
    let fatherName = event.target.father_name.value;
    let phone = event.target.phone.value;
    let dob = event.target.dob.value;
    let profileImage = event.target.profile_image.value;
    let gender = event.target.gender.value;
    let address = event.target.address.value;
    let cv = event.target.cv.value;
    let city = event.target.city.value;
    // let acknowledgement = event.target.acknowledgement.checked;


    // if (name  === "" ) {
    //     error.innerText = "name is required";
    
    // } else if(fatherName === ""){
    //     error.innerText = "father name is required";
    // }
    //  else if(phone === ""){
    //     error.innerText = "father name is required";
    // }
    //  else if(profileImage === ""){
    //     error.innerText = "profile_image is required";
    // }
    //  else if(gender === ""){
    //     error.innerText = "gender is required";
    // }
    //  else if(fatherName === ""){
    //     error.innerText = "father name is required";
    // }
    //  else if(address === ""){
    //     error.innerText = "address is required";
    // }
    //  else if(cv === ""){
    //     error.innerText = "cv is required";
    // }
    //  else if(city === ""){
    //     error.innerText = "city name is required";
    // }
    //    else{
    //     alert("Form Submitted Successfully");
    //    }
     
    
    let data = Object.fromEntries(formData.entries());
    console.log(data);
    
});