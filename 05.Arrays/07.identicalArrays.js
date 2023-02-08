function identicalArrays(firstArray, secondArray){
    let sum = 0;
    for(let i = 0; i <firstArray.length ; i++){
        sum+=Number(firstArray[i]);
        if(firstArray[i]!=secondArray[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
identicalArrays(['1'], ['10']);