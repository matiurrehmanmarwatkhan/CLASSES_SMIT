let text = "5";
text = text.padStart(4,"0");
// console.log(text);


// let massage = "Hello World";
// massage = massage.repeat(12)
// console.log(massage);


// let massage = "How are you ? How are you ?"
// massage = massage.replace("are" , "r")
// massage = massage.replaceAll("are" , "r")
// console.log(massage);





let massage = "How are you ?";
// console.log(massage.split(" "));

// join ()
let cta = massage.split(" ");
let rs = cta.reverse();

// console.log(rs);
// console.log(rs.join(" "));





// Number Methods

// let a = 12;
let a = "we";
// console.log(isNaN(a));


let x = "3h" ;
// console.log(isFinite(x));





let b = 12 ;
let integer = "Integer";
let zero = 0 ;
let float = 4.9 ;
let negative = -12 ;
console.log(Number.isInteger(b));
console.log(Number.isInteger(integer));
console.log(Number.isInteger(zero));
console.log(Number.isInteger(float));
console.log(Number.isInteger(negative));
