function negativeOrPositive(arr){
    arr= arr.map(Number);
    let newArr =[];
    for (const number of arr) {
        if(number<0){
            newArr.unshift(number)
            continue;
        }
        newArr.push(number);
    }
    for (const number of newArr) {
        console.log(number);
    }
};
negativeOrPositive(['3', '-2', '0', '-1']);