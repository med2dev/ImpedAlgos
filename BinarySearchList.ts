export default function bs_list(haystack: number[], needle: number): boolean {
        // set lo to the index position of the first value
        let lo = 0
        // hi gets the index position of the last value
        let hi = haystack.length - 1
        // binary search uses log2(length) iterations
        // worst case, you need to do up to the log of the length + 1
        // you don't need to truncate this because it is an inequality
        const iters = Math.log2(haystack.length) + 1
        for (let i = 0; i < iters; i++){
          // midpoint of available search space
          const m = Math.floor(lo + (hi - lo)/2)
          // value to check
          // because of 0 indexing, this will be the midpoint for odd lengths
          // one before the midpoint for even lengths
          const v = haystack[m]
          // if the value is the one you're looking for, you're done
          if (v == needle){
            return true
          } else if (v > needle){
            // if the value is larger, you need to check the search space
            // below it
            // you already checked haystack[m]. Your search space should be
            // precisely that area that could contain the value and hasn't yet
            // been checked.
            hi = m - 1
          } else {
            // the other option is that the value is smaller, and you need
            // to search the space above it
            lo = m + 1
          }
        }

        return false
}
