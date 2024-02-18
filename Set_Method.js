// add(value)
const mySetAdd = new Set();
mySetAdd.add('apple');
mySetAdd.add('banana').add('orange'); // Method chaining
console.log(mySetAdd); // Output: Set { 'apple', 'banana', 'orange' }


// //delete(value)
const mySetDelete = new Set(['apple', 'banana', 'orange']);
mySetDelete.delete('banana');
console.log(mySetDelete); // Output: Set { 'apple', 'orange' }


//  has(value)
const mySetHas = new Set(['apple', 'banana', 'orange']);
console.log(mySetHas.has('apple')); // Output: true
console.log(mySetHas.has('grape')); // Output: false



// foreach(value)
const mySet = new Set(['apple', 'banana', 'orange']);
mySet.forEach((value) => console.log(value));
// Output:
// apple
// banana
// orange


// clear(vlaue)
const mySetClear = new Set(['apple', 'banana', 'orange']);
mySetClear.clear();
console.log(mySetClear); // Output: Set {}


// size(value)
const mySetSize = new Set(['apple', 'banana', 'orange']);
console.log(mySetSize.size); // Output: 3
