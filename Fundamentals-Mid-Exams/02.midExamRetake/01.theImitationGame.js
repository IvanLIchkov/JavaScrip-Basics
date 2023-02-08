function imitationGame(input) {
  let message = input[0];
  for (let i = 1; i < input.length; i++) {
    let arr = input[i].split("|");
    let command = arr[0];
    switch (command) {
      case "Move":
        move(Number(arr[1]));
        break;
      case "Insert":
        insert(Number(arr[1]), arr[2]);
        break;
      case "ChangeAll":
        changeAll(arr[1], arr[2]);
        break;
      case "Decode":
        console.log(`The decrypted message is: ${message}`);
        return;
    }
  }
  function move(numberOfLetters) {
    let substring = message.substring(0, numberOfLetters);
    message = message.replace(substring, "");
    message += substring;
  }
  function insert(index, charToInsert) {
    message = message.slice(0, index) + charToInsert + message.slice(index);
  }
  function changeAll(substring, replacement) {
    for(let i = 0; i <message.length ; i++){
        if(message[i]==substring){
           message=  message.replace(substring, replacement);
        }
    }
  }
}
imitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]
);
