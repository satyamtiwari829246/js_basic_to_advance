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