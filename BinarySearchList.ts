export default function bs_list(haystack: number[], needle: number): boolean {
        let lo = 0
        let hi = haystack.length
        // binary search uses log2(length) iterations
        // TODO: verify that you don't need to floor
        // recognize that the log can take noninteger values
        const iters = Math.log2(haystack.length)
        for (let i = 0; i < iters; i++){
          // midpoint of available search space
          const m = Math.floor(lo + (hi - lo)/2)
          // value to check
          const v = haystack[m]
          // if the value is the one you're looking for, you're done
          if (v == needle){
            return true
          } else if (v > needle){
            // if the value is larger, you need to check the search space
            // below it
            hi = m
          } else {
            // the other option is that the value is smaller, and you need
            // to search the space above it
            low = m
          }
        }
//        do {
//            const m = Math.floor(lo + (hi - lo)/ 2);
//            const v = haystack[m];
//            if (v === needle){
//                return true;
//            } else if (v > needle) {
//                hi = m;
//            } else {
//                lo = m + 1;
//            }
//        } while (lo < hi);

        return false;
}
