// Check if a number is positive or negative.
function checkPositiveNegative(num){
    if (num >= 0 ){
        return "Positive"
    }
    else{
        return "Negative"
    }
}
// console.log(checkPositiveNegative(-7));

// Check if a number is even or odd.
function checkEvenOdd(num){
    if (num % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}
// console.log(checkEvenOdd(9));
// console.log(checkEvenOdd(10));

// check if age is 18 or above.
function checkAge(age){
    if (age >= 18 ){
        return "Adult"
    }   else{
        return "Minor"
    }
}
// console.log(checkAge(20));
// console.log(checkAge(10));

// Write a function add two numbers.
function addTwoNumbers(num1, num2){
    return num1 + num2
}
// console.log(addTwoNumbers(8 , 32322));

//Write a function that returns your name.
function returnName(){
    return "Mati Ur Rehman"
}
// console.log(returnName());


// Convert minutes to seconds.
function convertMinutesToSeconds(minutes){
    return minutes * 60
}
// console.log(convertMinutesToSeconds(90));

// Create an array of 5 numbers and print them using a loop.
function printArrayNumbers(){
    let number = [1 , 2, 3 ,4 ,5]
    for (let i = 0; i < number.length; i++){
        // console.log(number[i]);
        
    }
}
printArrayNumbers();



// Fint the length of a array.

function arrayLength(arr){
    return arr.length
}
// console.log(arrayLength([1,2,3,4,5,6,7,8,9]));

// Print the first and last element of an array.
function printFirstAndLastElement(arr){
    return [arr[0], arr[arr.length -1]]
}
// console.log(printFirstAndLastElement([1,2,3,4,5,6,7,8,9]));


// Create an object student with name and age. update the age of the student object.
function createObjectStudent(name, age){
    let student = {
        name: name,
        age: age
    }
    student.age = 18
    return student
}
// console.log(createObjectStudent("Mati Ur Rehman", 17));
// change age
// console.log(createObjectStudent("Mati Ur Rehman", 17).age = 18);


// Write a function that returns "Pass" or "Fail" (marks ≥ 40).
function checkPassFail(marks){
    if (marks >= 40){
        return "Pass"
    }
    return "Fail"
}
// console.log(checkPassFail(90));

//  Write a function to find the greater of two numbers
function findGreaterNumber(num1, num2){
    if (num1 > num2){
        return num1
    }
    return num2
}
// console.log(findGreaterNumber(20.5, 20));


// Write a function that checks if a number is divisible by 5
function isDivisibleBy5(num){
    if (num % 5 === 0){
        return true
    }
    return false
}
// console.log(isDivisibleBy5(54));


// Find the largest number in an array
function findLargestNumber(arr){
    let Largest = arr[0]
    for (let i = 1; i <arr.length; i++){
        if (arr[i] > Largest){
            Largest = arr[i]
        }
    }
    return Largest
}
// console.log(findLargestNumber([1,2,3,4,5,6,7,8,9,100,23,245,67,89]));

// Calculate the sum of all numbers in an array.
function sumOfArray(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
// console.log(sumOfArray([1,2,3,4,5,290]));

