function reverse(n, array){
    let arr=[];
    for(let i = 0; i <n ; i++){
        arr.push(array[i]+" ");
    }
    let output = "";
    for(let i = arr.length-1; i >=0 ; i--){
        output+=arr[i];
    }
    console.log(output);
}
reverse(3, [10, 20, 30, 40, 50]);