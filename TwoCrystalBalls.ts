// challenge: you have two crystal balls and a building n stories tall
//            the balls are intact when dropped up to a certain height.
//            when dropped from that threshold height and above, they break
//            use the most optimized algoirthm you can to find the threshold
//            height, in terms of the number of stories, where the balls break
//            remember, you only have two crystal balls to test

// P: boolean array, ordered, representing the outcome of a crystal ball
//    thrown from each floor of a building
//
// R: the index of the first true , the floor that is just high enough to break
//    the crystal Ball

// E:
two_crystal_balls([false, false, true, true, true]) // 2
two_crystal_balls([true, true, true, true]) // 0
two_crystal_balls([false, false, false, false, false]) // -1

// Pseudocode:
// binary search won't work because of the 'two balls only' constraint
// linear search is O(N), as is any strategy that jumps by a constant of the size
// of the input
// jump by a the square root of the size of the input
// check value at sqrt(breaks.length). If it is false (not broken), jump by sqrt
// again. If it is true (broken), drop to one higher than the last checked value
// that was false, walk one at a time until you find the first true

export default function two_crystal_balls(breaks: boolean[]): number {
    // jump by the square root of the length
    const jumpSize = Math.floor(Math.sqrt(breaks.length));

    // set a value for i outside the loop so you can refer to it outside this
    // scope. This is the position in the array
    let i = jumpSize
    // loop through by the jumpSize until the first crystal balls breaks
    for (; i < breaks.length; i += jumpSize){
        // if the first crystal ball breaks
        if (breaks[i]) {
            // exit the loop
            break;
        }
    }

    // Either you jumped past one or more final floors without testing, or
    // The ball doesn't break from the highest floor, or
    // The ball broke
    // In either of these 3 cases, you want to do the same thing:
    // go back by the jump size
    i -= jumpSize;

    // loop one at a time until you reach the jumpSize, or the end of the array
    // find the first true
    for (let j = 0; j < jumpSize && i < breaks.length; ++j, ++i){
        if (breaks[i]){
            // if it's broken, you've been stepping one at a time, so this is the
            // position of the first break
            return i;
        }
    }

    // if you complete the array without finding a true, there isn't one
    // return a sentinal value
    return -1;


}
