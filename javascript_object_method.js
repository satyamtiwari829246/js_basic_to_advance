let person = {
    name: "satyam kumar",
    age: 22,
    Salary: 30000,
};


let person1 = Object.assign({}, person);//copying the object person to person1
let person2 = Object.create(person);//creating a new object person2 with person as its prototype

document.write("Name: " + person1.name + "<br>");
document.write("Age: " + person1.age + "<br>");
document.write("Salary: " + person1.Salary + "<br>");
document.write("Name: " + person2.name + "<br>");
document.write("Age: " + person2.age + "<br>");
person2.Salary = 40000; //adding a new property to person2
document.write("Salary: " + person2.Salary + "<br>");

//object define Property
let person3 = {};
Object.defineProperty(person3, "name", {
    value: "John Doe",
    writable: true,
    enumerable: true,
    configurable: true
});
document.write("Name: " + person3.name + "<br>");
person3.name = "satyam kumar"; //changing the value of name property
document.write("Name: " + person3.name + "<br>");

//getting the enteries of the object
let result = Object.entries(person);
document.write("Entries of the object: " + result + "<br>");

//freezing the object
Object.freeze(person);
person.name = "priyam kumar"; //this will not change the value of name property as the object is frozen
document.write("Name: " + person.name + "<br>");

//object .getOwnPropertyDescriptor()

let car = {
    brand: "Toyota",
}

Object.defineProperty(car, "model", {
    value: "Camry",
    writable: true,
    enumerable: true,
    configurable: true
});

let descriptor = Object.getOwnPropertyDescriptor(car, "model");
document.write("Descriptor of model property: " + JSON.stringify(descriptor) + "<br>");

let descriptor1 = Object.getOwnPropertyNames(car);
document.write("Property names of car object: " + descriptor1 + "<br>");//it return the name of the properties of the object in an array


let descriptor2 = Object.getOwnPropertySymbols(car);
document.write("Property symbols of car object: " + descriptor2 + "<br>");//it return the symbol properties of the object in an array

let descriptor3 = Object.getPrototypeOf(car);
document.write("Prototype of car object: " + descriptor3 + "<br>");//it return the prototype of the object


let descriptor4 = Object.is(car, car);
document.write("Are car and car the same object? " + descriptor4 + "<br>");//it return true if the two objects are the same, otherwise false

let descriptor5 = Object.isExtensible(car);
document.write("Is car object extensible? " + descriptor5 + "<br>");//it return true if the object is extensible, otherwise false

let descriptor6 = Object.isFrozen(car);
document.write("Is car object frozen? " + descriptor6 + "<br>");//it return true if the object is frozen, otherwise false

let descriptor7 = Object.isSealed(car);
document.write("Is car object sealed? " + descriptor7 + "<br>");//it return true if the object is sealed, otherwise false

let descriptor8 = Object.keys(car);
document.write("Keys of car object: " + descriptor8 + "<br>");//it return the keys of the object in an array

let descriptor9 = Object.values(car);
document.write("Values of car object: " + descriptor9 + "<br>");//it return the values of the object in an array

let descriptor10 = Object.entries(car);
document.write("Entries of car object: " + descriptor10 + "<br>");//it return the entries of the object in an array

object.preventExtensions(car);
