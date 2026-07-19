class Employee{
    constructor(id,name){
        this.id = id;
        this.name= name;

    }


details(){
    document.write(this.id+" "+this.name+"<br>");
}
}

var e1 = new Employee (101,"Satyam kumar");
var e2 = new Employee (102, "Priyam kumar");
e1.details();
e2.details();
