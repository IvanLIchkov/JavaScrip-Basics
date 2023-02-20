function modifier(input) {
  let values = input[0].split(" ");
  for (let i = 1; i < input.length; i++) {
    let commands = input[i].split(' ');
    let command = commands[0];
    switch (command) {
      case "swap":
        let index1 = Number(commands[1]);
        let index2 = Number(commands[2]);
        let momnetValue = values[index1];
        values[index1]=values[index2];
        values[index2] = momnetValue;
        break;
      case "multiply":
        let first = Number(commands[1]);
        let second = Number(commands[2]);
        let momnetVal = values[first]*values[second];
        values[first] = momnetVal;
        break;
      case "decrease":
        for(let i = 0; i <values.length ; i++){
            values[i]-=1;
        }
        break;
    }
  }
  console.log(values.join(', '));
}
modifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  
  )
  
