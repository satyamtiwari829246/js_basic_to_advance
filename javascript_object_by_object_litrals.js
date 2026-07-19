let student = {
    name:"Satyam kumar",
    roll_no:"25scse1180984",
    course: "B.tech Cse",
    College_name: "galgotias university",
}


console.log(student.name);
console.log(student.roll_no);
console.log(student.course);
console.log(student.College_name);

// by creating the instance of object
var emp = new Object();
emp.id= 101;
emp.name= "ravi malik";
emp.salary = "30000";
 document.write(emp.id+" "+emp.name+" "+emp.salary+" <br>");

 //by using an object constructor

 function emp1(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
 }

 let e= new emp1(103,"satyam kumar",30000);
 document.writeln(e.id+" "+e.name+" "+e.salary);


