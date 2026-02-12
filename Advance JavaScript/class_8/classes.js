class Vehicles {
    constructor(name , model , type , color) {
        this.name = name;
        this.model = model;
        this.type = type;
        this.color = color;
    }
    getColor(){
        console.log(this.color);
    }
    allProperties(){
        console.log(` Name : ${this.name} , Type : ${this.type} ,Model : ${this.model} , Color : ${this.color}`);
    }
}
let vehicale1 = new Vehicles("Sedan" , "car" , "2020" , "Red");
vehicale1.getColor();
vehicale1.allProperties();

let vehicale2 = new Vehicles("Toyata Supra" , "Car" , "2026" , "Black")
vehicale2.getColor();
vehicale2.allProperties();

let vehicale3 = new Vehicles("Supra Mkv 4 " , "Car" , "2026" , "White");
vehicale3.getColor();
vehicale3.allProperties();