function theLift(input) {
  let i = 0;
  let waitingPeople = Number(input[0]);
  let stateOfLift = input[1].split(" ").map(Number);
  for (let i = 0; i < stateOfLift.length; i++) {
    while (stateOfLift[i] != 4 && waitingPeople != 0) {
      stateOfLift[i] += 1;
      waitingPeople--;
    }
  }
  if (stateOfLift[stateOfLift.length - 1] == 4 && waitingPeople > 0) {
    console.log(
      `There isn't enough space! ${waitingPeople} people in a queue!`
    );
  } else {
    console.log("The lift has empty spots!");
  }
  console.log(stateOfLift.join(" "));
}

theLift(["15", "0 0 0 0 0"]);
