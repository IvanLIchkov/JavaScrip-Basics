function reverseInPlace(input){
    for(let i =0; i <input.length/2 ; i++){
        let firstElement = input[i];
        let lastElemetn = input[input.length-1-i];
        input[input.length-1-i] = firstElement ;
        input[i] = lastElemetn;
    }
    console.log(input.join(' '));
}
// function swapElements(arr, i, j){
//     let firstElement = arr[i];
//     let lastElemetn = arr[j];
//     arr[j] = firstElement ;
//     arr[i] = lastElemetn;
// }
reverseInPlace(['33', '123', '0', 'dd']);