"use strict";
const binaryToHash = (input, index = 0, graph = {}) => {
    // Base case: if the index exceeds the input length or the current node is null, return
    if (index >= input.length || input[index] === null)
        return graph;
    const value = input[index]; // Non-null assertion
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    if (leftChildIndex < input.length && input[leftChildIndex] !== null) {
        const leftChild = input[leftChildIndex];
        graph[value] = [...(graph[value] || []), leftChild];
    }
    if (rightChildIndex < input.length && input[rightChildIndex] !== null) {
        const rightChild = input[rightChildIndex];
        graph[value] = [...(graph[value] || []), rightChild];
    }
    binaryToHash(input, leftChildIndex, graph);
    binaryToHash(input, rightChildIndex, graph);
    return graph;
};
// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6];
// Input:
//     1
//    / \
//   2   3
//  / \   \
// 4   5   6
const graphBinary = binaryToHash(inputArray);
console.log(graphBinary);
// Output:
// { '1': [ 2, 3 ], '2': [ 4, 5 ], '3': [ 6 ] }
