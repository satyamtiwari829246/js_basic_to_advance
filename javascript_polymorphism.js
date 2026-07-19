class A{
    display(){
        document.writeln("A is Invoked");

    }
};
class B extends A{

};

var b = new B()
b.display();