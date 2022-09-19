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

import { textSpanIntersectsWithPosition } from "typescript";

export default function bubble_sort(arr: number[]): void {
    // outer loop: look at up to the (n-1)th, then (n-2)th... to the 1st element
    // so this runs n - 1 times
    for (let i = 0; i < arr.length - 1; i++){
        // inner loop: walk through from the first element to the n -1th element
        // but each run through the outer loop, decrease stop short by one more
        for (let j = 0; j < arr.length - 1 - i; j++){
            // compare the current element to the next one
            // if the current element is larger, swap them
            if (arr[j] > arr[j + 1]){
                // give the current value to tmp
                const tmp = arr[j]
                // set the array value at the current position to the next value
                arr[j] = arr[j + 1]
                // set the array value at the next position to the initial value
                // of the current position, which is now in tmp
                arr[j + 1] = tmp

            }
        }
    }
}
