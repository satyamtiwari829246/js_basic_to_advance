
function Greet(name){
    console.log(`${name}, ${this.name}`);
    document.write(`${name}, ${this.name}<br>`);
}

const user = { name: "Satyam" };  //yah object hai jisme property ka naam "name" hai aur value "Satyam" hai
Greet.call(user, "hello");

// Greet.apply(user, ["hello"]); //yah apply method hai jisme array ke form me argument pass karte hai