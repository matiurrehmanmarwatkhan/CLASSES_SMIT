let student_names = ["Mati" , "Irshad" , "Bob" , "Noman"];
let student_marks = [23 , 24 , 35 ,89];


// for(let item = 0 ; item < student_names.length; item++){
//     console.log(student_names[item]);
// }

// Map Methods

let newArray = student_names.map((element ,index) =>{
    return element , index;
    // console.log(element,index);
    
});
// console.log(newArray);

let updateArray = student_marks.map((element ,index) =>{
    return element + 20 ;
});
// console.log(updateArray);
// console.log(student_marks);



