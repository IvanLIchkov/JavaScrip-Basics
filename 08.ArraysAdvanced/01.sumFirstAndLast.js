function sum(numbers){
    let num =Number(numbers[0]);
    num+=Number(numbers.pop());
    console.log(num);
};
sum(['5', '10'])