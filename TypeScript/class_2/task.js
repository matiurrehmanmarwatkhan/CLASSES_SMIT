// Add proper TypeScript types to the following variables:
var username = "John";
var age = 25;
var isAdmin = false;
var salary = 5000;
console.log("Task One");
console.log(username);
console.log(age);
console.log(isAdmin);
console.log(salary);
function greetuser(username) {
    return "Hello " + username;
}
console.log("Task Second");
console.log(greetuser(username));
// What types does TypeScript infer here?
var city = "London";
var year = 2024;
var isOnline = true;
console.log("Task Third"); // string
console.log(city); // string
console.log(year); // number
console.log(isOnline); // boolean
// Why does this code cause an error?
var score = 10;
// score = "high";
console.log("Task Four");
console.log(score); // this eroor has only number type not change string type
var userId = 101;
userId = "A101";
console.log("Task Five");
console.log(userId);
var user = ["Mati", 30, true];
console.log("Task Six");
console.log(user);
