class Employee{
    #salary;
    constructor(id,name,salary){
        this.id=id;
        this.name= name;
        this.#salary= salary;
    }
    show_salary(){
document.write("Salary: "+this.#salary);
    }
}

let e1 = new Employee(121,"satyam kumar",50000)
e1.show_salary();