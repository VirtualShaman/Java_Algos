// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){
    sum1 = 0
    for (x=0;x<arr.length;x++){
        sum1+=arr[x]
    }
    for (i=0;i<arr.length;i++){
        for (j=(arr.length-1)-i;j<arr.length;j++){
            sum2 = 0
            sum2+=arr[i]
            if (j==arr.length-1 && sum1/2==sum2){
                return true
            }
        }
    }
    return false
}
console.log(balancePoint([1,2,3,4,10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1,2,3,2,1])) // FALSE
console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
console.log(balancePoint([2,2])) // TRUE

function balanceIndex(arr) {
}

// console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
// console.log(balanceIndex([9,9])) // FALSE
// console.log(balanceIndex([4,2,2,6])) // TRUE
// console.log(balanceIndex([9,1,9])) // TRUE
// console.log(balanceIndex([1,8,1,2,3,4])) // TRUE