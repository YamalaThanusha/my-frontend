let array=[23,47,99,7,67,59,0,63]
array.length
console.log("Length of the array: ",array); //if we give length out side of the console it gives whole length of the array like[23,47,99,7,67,59,0,63]
console.log("Length of the array: ",array.length);//if we give inside the console it gives length like 8
console.log("Index of the array: ",array.indexOf(7));
array.push(45);
console.log( "Inserting array element at the end of the array: " ,array);
array.pop()
console.log("Deleting array element at the end of the array: ",array);
array.unshift(78)
console.log("inserting array element at the starting of the array: ",array);
array.shift()
console.log("delecting array element at the starting of the array: ",array);
console.log("slicing the elements:",array.slice(3,7));
console.log("Includes: ",array.includes(99));
let a=[4,5,667,9,4,1]
console.log("concatinating elements: ",array.concat(a));
