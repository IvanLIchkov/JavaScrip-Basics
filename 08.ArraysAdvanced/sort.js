let numbers = [2, 4, 1, 6, 2];
let cars = ["bmw", "mercedes", "toyota", "audi", "VW"];


//Sort Nums
// numbers.sort((a, b) => {
//     if (a<b){
//         return-1;
//     }else if(a>b){
//         return 1;
//     }else{
//         return 0;
//     }
// });
numbers.sort((a, b) => a - b);

//sort strings
cars.sort((a, b) => a.localeCompare(b));