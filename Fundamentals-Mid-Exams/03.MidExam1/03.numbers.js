function nums(input) {
  let numbers =  input.split(' ').map(Number);
  let average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  numbers = numbers.sort((a, b) => b - a);
  let averageNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > average) {
      averageNumbers.push(numbers[i]);
      if (averageNumbers.length >= 5) {
        console.log(averageNumbers.join(" "));
        return;
      }
    }
    
  }
  if(averageNumbers.length==0){
    console.log('No');
  }else{
    console.log(averageNumbers.join(' '));
  }
  
}
nums('5 2 3 4 -10 30 40 50 20 50 60 60 51')