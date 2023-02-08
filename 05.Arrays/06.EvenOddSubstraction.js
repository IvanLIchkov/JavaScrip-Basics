function sustraction(arr){
    let evenNumbers=Number(0);
    let oddNumbers=Number(0);
    for(let i = 0; i <=arr.length-1 ; i++){
        let momentNumber=arr[i];
       if(momentNumber%2==0){
        evenNumbers+=momentNumber;
       }else{
        oddNumbers+=momentNumber;
       }
    }
    console.log(evenNumbers-oddNumbers);
}
sustraction([3,5,7,9]);