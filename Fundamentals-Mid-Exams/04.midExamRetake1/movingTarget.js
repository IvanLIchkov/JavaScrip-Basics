function movingTarget(input) {
  let targets = input[0].split(" ").map(Number);
  for (let i = 1; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    let index = Number(commands[1]);
    let value = Number(commands[2]);
    switch (command) {
      case "Shoot":
        if(index>=0 && index<targets.length){
            targets[index]-=value;
            if(targets[index]<=0){
                targets.splice(index, 1);
            }
        }
        break;
      case "Add":
        if(index>=0 && index<targets.length){
            targets.splice(index, 0, value);
        }else{
            console.log("Invalid placement!");
        }
        break;
      case "Strike":
        if(index-value>=0 && index+value<targets.length){
            targets.splice(index-value, index+value);
        }else{
            console.log("Strike missed!");
        }
        break;
    }
  }
  console.log(targets.join("|"));
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])


