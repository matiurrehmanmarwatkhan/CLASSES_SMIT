// 📘 Part 1: Basic Function Tasks
// Task 1 — Add Two Numbers
// Use: function, parameters, return
// Flow / steps:
// 1.	Define a function with two parameters (a, b).
// 2.	Inside the function add them (sum = a + b).
// 3.	Return the result.
// Example: input (3,5) → output 8.
// ________________________________________
// Task 2 — Check Even or Odd
// Use: function, arithmetic operator %, conditional (if/else)
// Flow / steps:
// 1.	Create a function taking one number.
// 2.	Compute num % 2.
// 3.	If remainder is 0 → return "Even", else "Odd".
// Example: 7 → "Odd".
// ________________________________________
// Task 3 — Celsius → Fahrenheit
// Use: function, arithmetic
// Flow / steps:
// 1.	Function accepts celsius.
// 2.	Apply formula fahrenheit = celsius * 1.8 + 32.
// 3.	Return value (optionally round).
// Example: 0 → 32.
// ________________________________________
// Task 4 — Return Full Name
// Use: function, string concatenation
// Flow / steps:
// 1.	Function accepts firstName and lastName.
// 2.	Join them with a space (firstName + " " + lastName).
// 3.	Return the full string.
// Example: ("Ali","Khan") → "Ali Khan".
// ________________________________________
// Task 5 — Square a Number
// Use: function, arithmetic (*)
// Flow / steps:
// 1.	Function takes num.
// 2.	Compute num * num.
// 3.	Return result.
// Example: 4 → 16.








function Task(a , b){
    let sum = a + b;
    return sum ;
}
// console.log(Task(12 , 23));


function checknumber(num){
    if (num % 2 == 0){
        return "Even";
    }else{
        return "Odd"
    }
}

// console.log(checknumber(6));




function convert(user){
 let farenhight = (user * 1.8 ) + 32;
 return farenhight;
}
// console.log(convert(0));



