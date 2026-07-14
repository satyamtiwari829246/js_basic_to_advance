function employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
};

let employee1 = new employee("Satyam", 22, 30000);
document.write(employee1.name + "<br>");
document.write(employee1.age + "<br>");
document.write(employee1.salary + "<br>");
