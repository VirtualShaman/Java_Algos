// Remove Dupes
// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

function removeDupe(arr) {      //DNF
    newarr = []
    checker = 0
    for (i=0; i<arr.length; i++){
        if (arr[i] != checker) {
            for (j=i+1; j<arr.length; j++){
                if (arr[i] == arr[j]){
                    checker = arr[j]
                    newarr.push(arr[i])
                }
                else if (j == arr.length-1){
                    newarr.push(arr[i])
                }
            }
        }
    }
    return newarr
}

// function removeDupe(arr) {
//     for (i=0; i<arr.length; i++){
//             for (j=i+1; j<arr.length; j++){
//                 if (arr[i] == arr[j]){
//                     arr.splice(j, 1)
//                 }
//             }
//     }
//     return arr
// }

console.log(removeDupe([1,2,1,3,4,2]))