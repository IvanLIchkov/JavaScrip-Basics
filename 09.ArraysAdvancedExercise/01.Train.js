function train(input) {
  let wagons = input[0].split(" ").map(Number);
  let capacity = Number(input[1]);
  for (let i = 2; i < input.length; i++) {
    let command = input[i].split(" ");
    if (command.length == 2) {
      wagons.push(Number(command[1]));
    } else {
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + Number(command[0]) <= capacity) {
          wagons[i] += Number(command[0]);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
