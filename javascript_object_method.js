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
