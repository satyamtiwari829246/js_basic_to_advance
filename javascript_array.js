var arrayname = ["satyam", "kumar", "tiwari", "priyam", "kumar", "tiwari"];//  it will create a new array with the given values
//  document.write("Array: " + arrayname + "<br>");

 var name_array = new Array("satyam", "kumar", "tiwari", "priyam", "kumar", "tiwari");//  it will create a new array with the given values
//  document.write("Array: " + name_array + "<br>");

 var array1 = arrayname.concat(name_array);//it will concatenate the two arrays and return a new array
//  document.write("Concatenated Array: " + array1 + "<br>");

var emp = new Array("jai", "vijay", "smith");
for (var i=0; i<emp.length; i++) {
    // document.write(emp[i] + "<br>");
}


let fruit = ["Banana", "Orange", "Apple", "Mango"];
var fruits =  fruit.copyWithin(2, 0, 2); //it will copy the elements from index 0 to index 2 and paste it at index 2
 document.write("Fruits after copyWithin: " + fruits + "<br>");

 let result = fruit.entries(); //it will return an iterator object with key/value pairs of the array
 for (let x of result){
    console.log(x);
    document.write("Key:"+ x[0]+ "value :"+ x[1]+ "<br>");
 }

 //every() method checks if all elements in an array pass a test (provided as a function).
 let marks = [45, 78, 24, 90, 67];
 let allpassed = marks .every(function(value){
    return value >= 35;
 });
 document.write("All students passed: " + allpassed + "<br>");

 //flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

 let arr = [1, 2, [3, 4, [5, 6]]];
 let flatArr = arr.flat(1); //it will flatten the array up to the specified depth
 console.log(flatArr);

//flatmap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
let arr1 = [1,2,3,4];
result = arr1.flatMap(x => [x * 10]);
console.log(result); // Output: [10, 20, 30, 40]


let words = ["Hello World", "JavaScript"];

let result3 = words.flatMap(word => word.split(" "));

console.log(result3);// Output: ["Hello", "World", "JavaScript"]

//fill() method fills all the elements of an array from a start index to an end index with a static value. It returns the modified array.
let arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 2, 4);//it will fill the array with 0 from index 2 to index 4
document.write("Array after fill: " + arr2 + "<br>");// Output: [1, 2, 0, 0, 5]

//for each() method executes a provided function once for each array element.
let arr3 = [1, 2, 3, 4, 5];
arr3.forEach(function(value,ram,shyam){
    document.write(value+"<br>");
    document.write(ram+"<br>");
    document.write(shyam+"<br>");
});

//includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let arr4 = [1, 2, 3, 4, 5];
let includesValue = arr4.includes(3);
document.write("Array includes 3: " + includesValue + "<br>");

//is array() method determines whether the passed value is an Array.
let arr5 = [1, 2, 3, 4, 5];
let isArray = Array.isArray(arr5);
document.write("Is arr5 an array? " + isArray + "<br>");

//join() method joins all elements of an array into a string.
let arr6 = ["Hello", "World"];
let joinedString = arr6.join(" ");
document.write("Joined string: " + joinedString + "<br>");

//keys() method returns a new Array Iterator object that contains the keys for each index in the array.
let arr7 = ["a", "b", "c"];
let keys = arr7.keys();
for (let key of keys) {
    document.write("Key: " + key + "<br>");
}
//push() method adds one or more elements to the end of an array and returns the new length of the array.
let arr8 = [1, 2, 3];
let newLength = arr8.push(4, 5);
document.write("New length after push: " + newLength + "<br>");
document.write("Array after push: " + arr8 + "<br>");

//pop() method removes the last element from an array and returns that element. This method changes the length of the array.
let arr9 = [1, 2, 3, 4, 5];
let poppedElement = arr9.pop();
document.write("Popped element: " + poppedElement + "<br>");
document.write("Array after pop: " + arr9 + "<br>");
