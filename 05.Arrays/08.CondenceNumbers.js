function condence(arr){
    // if(arr.length==1){
    //     console.log(`${arr[0]} is already condensed to number`);
    //     return;
    // }
    while(arr.length!=1){
        for(let i = 0; i <arr.length-1 ; i++){
            let firstNum = arr[i];
            let secondNum = arr[i+1];
            arr[i]= firstNum+secondNum;
        }
        arr.pop();
    }
    console.log(arr.join(''));
}
condence([1]);