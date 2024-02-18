let array = [1, 2, 3, 4, 5];

array.copyWithin(3, 0, 3);

console.log(array);
// Output: [1, 2, 3, 1, 2]



// Explain
// In JavaScript, the array.copyWithin() method copies a portion of an array to another location within the same array, overwriting existing elements. This method does not change the length of the array.
// Here's how the array.copyWithin(target, start, end) method works:
// target: The index at which to copy the sequence to. It's a zero-based index.
// start (optional): The index at which to start copying elements from. It's a zero-based index. If omitted, it will copy from index 0.
// end (optional): The index at which to stop copying elements from. It's a zero-based index. If omitted, it will copy until the end of the array.