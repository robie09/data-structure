numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]
let sum= 0;
sum = numbers.reduce((a, b) => {
    return (a + b);
  });

  console.log('The sum is: ', sum);

// calculateSum =()=>{

//     for(let i=0 ; i>=numbers.length;i++){
//         sum+=numbers[i][j];
        
//         }
//         return sum;
// }




