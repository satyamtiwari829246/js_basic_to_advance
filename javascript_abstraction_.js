function vechile(){
    this.vechile= "vechile name";
    throw new error("you cannot create an instance of class");

}

vechile.prototype.dsplay= function(){
    return "vechile is:"+ this .vechile_name;

}

function bike(vechile_name){
   this.vechile_name = vechile_name;
}


let bike1 = new bike("bullet");

document.write(bike1.vechile_name);
document.write(bike.prototype.dsplay());