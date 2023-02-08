function sumEven(arr){
    let sum= Number(0);
    for(let i = 0; i <=arr.length-1 ; i++){
        let number=Number(arr[i]);
        if(number%2==0){
            sum+=number;
        }
    }
    console.log(sum);
}
sumEven(['1','2','3','4','5','6']);