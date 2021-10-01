var big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21]
];

var small = [
    [67,78],
    [43,32]
];

var anotherSmall = [
    [67,7],
    [43,32]
];


function matrixSearch (larger, smaller) {
    
    for (i=0;i<larger.length;i++){
        for (j=0;j<larger[i].length;j++){
            if (smaller[0][0] == larger[i][j] && j != larger[i].length-1 && 
                smaller[0][1] == larger[i][j+1] && 
                smaller[1][0] == larger[i+1][j] && i != larger.length-1 && 
                smaller[1][1] == larger[i+1][j+1]){
                return true
            }
            else if (i == larger.length-1 && j == larger[i].length-1 ){ return false }
        }
    }
}


console.log(matrixSearch(big, small))

console.log(matrixSearch(big, anotherSmall))