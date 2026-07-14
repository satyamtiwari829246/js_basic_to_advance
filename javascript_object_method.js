let person = {
    name: "satyam kumar",
    age: 22,
    Salary: 30000,
};


let person1 = Object.assign({}, person);

document.write("Name: " + person1.name + "<br>");
document.write("Age: " + person1.age + "<br>");
document.write("Salary: " + person1.Salary + "<br>");
