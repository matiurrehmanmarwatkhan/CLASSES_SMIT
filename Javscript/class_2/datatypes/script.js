// Data Types in JavaScript
// Primitives data types: string, number, boolean, null, undefined, symbol, bigint
// Number data type
let age = 25;
console.log( typeof "Age:", age); // Output: Age: 25
console.log( typeof age); // Output: number
// String data type
let nam = "John Doe";
console.log( typeof "Name:", nam); // Output: Name: John Doe
console.log( typeof nam); // Output: string
// Boolean data type
let isStudent = true;
console.log( typeof "Is Student:", isStudent); // Output: Is Student: true
console.log( typeof isStudent); // Output: boolean
// Null data type
let emptyValue = null;  
console.log( typeof "Empty Value:", emptyValue); // Output: Empty Value: null
console.log( typeof emptyValue); // Output: object (this is a known quirk in JavaScript)
// Undefined data type
let notDefined;
console.log( typeof "Not Defined:", notDefined); // Output: Not Defined: undefined
console.log( typeof notDefined); // Output: undefined
// Symbol data type
let uniqueId = Symbol("id");    
console.log( typeof "Unique ID:", uniqueId); // Output: Unique ID: Symbol(id)
console.log( typeof uniqueId); // Output: symbol
// BigInt data type
let bigNumber = 9007199254740991n;
console.log( typeof "Big Number:", bigNumber); // Output: Big Number: 9007199254740991n
console.log( typeof bigNumber); // Output: bigint
// Non-primitive data type: Object