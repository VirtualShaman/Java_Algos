// Binary Search

// Given a sorted array and a value, return whether
//  the array contains that value. Do not sequentially 
//  iterate the array. Instead 'divide and conquer'. 
//  Taking advantage of the fact that array is sorted. 


function binarySearch(arr, value){
    var middle = Math.floor(arr.length/2)
    var li = 0
    var ri = arr.length-1
    if (arr[0]>value || arr[arr.length-1]<value) {
        return false
    }
    while (arr[middle] != value) {
        if (arr[middle] < value) {
            li = middle
            middle = Math.floor(((ri-li)/2)+li)
        }
        if (arr[middle] > value) {
            ri = middle
            middle = Math.floor(((ri-li)/2)+li)
        }
    }
    return true
}

function binarySearchRecursive(arr, target, li = 0, ri = arr.length){
    middle = Math.floor(((ri-li)/2)+li)
    if (arr[middle] == target){
        return true
    }
    if ((ri-li) < 2) {
        return false
    }
    if (arr[middle] < target) {
        return binarySearchRecursive(arr, target, middle, ri)
    }
    if (arr[middle] > target) {
        return binarySearchRecursive(arr, target, li, middle)
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));
// ---> 1 2 3 4 5  |  6 7 8 9 10
// ---> 6 7  |  8 9 10
// ---> 8  [9]  10  (found)

console.log(binarySearchRecursive([1,2,3,4,5,6,7,8,9,10,12,13], 10))    //TRUE
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ))    //FALSE
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 16 ))    //TRUE
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 12, 14, 16], 8 ))    //TRUE
console.log(binarySearchRecursive([8], 8 ))   //TRUE