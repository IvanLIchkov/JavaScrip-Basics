function lastNumSequence(length, k){
    let sequence = [1] ;
    for(let i = 1; i <length ; i++){
        let index = Math.max(sequence.length-k, 0);
        let numsForSum = sequence.slice(index);
        let sumOfNums=0;
        for (const num of numsForSum) {
            sumOfNums+= Number(num);
        }
        sequence.splice(i, 0, sumOfNums);
    }
    console.log(sequence.join(' '));
};
lastNumSequence(6, 3)
lastNumSequence(8, 2)