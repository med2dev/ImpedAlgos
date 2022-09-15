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
two_crystal_balls([false, false, false, false, false]) // what should this return?

// Pseudocode:

export default function two_crystal_balls(breaks: boolean[]): number {

}
