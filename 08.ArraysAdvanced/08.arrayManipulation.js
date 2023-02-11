function manipulator(input) {
  let arr = input[0].split(' ');
  for (let i = 1; i < input.length; i++) {
    let commands = input[i].split(' ');
    let command = commands[0];
    let number = commands[1];
    switch (command) {
      case "Add":
            arr.push(number);
        break;
      case "Remove":
        arr= arr.filter(num => num !== number);
        break;
      case "RemoveAt":
        arr.splice(Number(number), 1);
        break;
      case "Insert":
        let index = commands[2];
        arr.splice(index, 0, number);
        break;
    }
  }
  console.log(arr.join(' '));
};
manipulator(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])
