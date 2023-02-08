function main(firstNum, secondNum, thirdNum){
    function sum(first, second){
        return first+second;
    }
    function substract(sum, third){
        return sum-third;
    }
    console.log(substract(sum(firstNum,secondNum),thirdNum));
}
main(23,

    6,
    
    10);