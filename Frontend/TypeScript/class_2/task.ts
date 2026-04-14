// Add proper TypeScript types to the following variables:
let username: string = "John";
let age: number = 25;
let isAdmin: boolean = false;
let salary: number = 5000;

console.log("Task One");

console.log(username);
console.log(age);
console.log(isAdmin);
console.log(salary);

function greetuser(username: string): string {
  return "Hello " + username;
}
console.log("Task Second");

console.log(greetuser(username));

// What types does TypeScript infer here?
let city = "London";
let year = 2024;
let isOnline = true;

console.log("Task Third"); // string
console.log(city); // string
console.log(year); // number
console.log(isOnline); // boolean

// Why does this code cause an error?
let score = 10;
// score = "high";
console.log("Task Four");
console.log(score); // this eroor has only number type not change string type

let userId: string | number = 101;
userId = "A101";
console.log("Task Five");
console.log(userId);

let user: (string | number | boolean)[] = ["Mati", 30, true];

console.log("Task Six");
console.log(user);
