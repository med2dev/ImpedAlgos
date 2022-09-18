// Sort an array in O(n^2) time


// P: An array of numbers
// R: No return value, but the side effect is sorting the array in place

// Pseudocode:
// Bubble sort: walk an array one element at a time
// check to see if current element is larger than next element
// if it isn't, move to the next one
// If it is, swap positions

// After one outer loop iteration, the final element is the largest in the array
// So each outer loop iteration, you need to walk one less than the last
// until the final outer loop iteration only needs one inner loop iteration
// This means the number of total iterations is n(n+1)/2
// that reduces to O(n^2)
