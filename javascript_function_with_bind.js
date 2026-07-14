function myfunction(course){
   let name = "Satyam";
    let Age = 20;
    console.log(name);
    console.log(Age);
    console.log(`${this.name} studies ${course}`);
    document.write(name + "<br>");
    document.write(Age + "<br>");
}

const user = {
    name: "Satyam"
};


let func = myfunction.bind(user, "B.Tech");
func();
