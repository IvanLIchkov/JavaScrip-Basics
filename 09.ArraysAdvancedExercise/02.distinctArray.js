function distinctArr(input){
    let arr = input.map(Number);
    let modifiedArr =[];
    for(let i = 0; i <arr.length ; i++){
        let num = arr[i];
        if(modifiedArr.indexOf(num)==-1){
            modifiedArr.push(num);
        }
    }
    console.log(modifiedArr.join(' '));
};
distinctArr([20, 8, 12, 13, 4,

    4, 8, 5])

function distinctArrWithSet(input){
    let uniqueNumbers = new Set(input);
    console.log([...uniqueNumbers]);
};
distinctArrWithSet([20, 8, 12, 13, 4,

    4, 8, 5])