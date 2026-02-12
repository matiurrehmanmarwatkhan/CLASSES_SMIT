let a:string = "10";

a = "test";

let check :boolean = true;
// console.log(check);


let isTrue = 123 ;
// isTrue = "test";
// console.log(isTrue);

// console.log(a);


let b : any = "test@gmail.com";
// b = 1234567890;
// console.log(b);

let userNames : (string | number | boolean)[] = ["john", 239 , true];

console.log(userNames);



let userDatail: {name: string, age: number, isAdmin: boolean , country?: string} = {
    name : "john",
    age : 30,
    isAdmin : true
}
console.log(userDatail.name);
console.log(userDatail.age);
console.log(userDatail.isAdmin);
console.log(userDatail.country);















export {};
