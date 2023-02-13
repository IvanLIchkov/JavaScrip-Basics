function searchForNumber(arr, commands){
  commands = commands.map(Number);
    let getCount = commands[0];
    let delCount = commands[1];
    let searchNumber = commands[2];
    let counter = 0;
    
    arr.splice(getCount);
    arr.splice(0, delCount);

    for (const num of arr) {
        if(num==searchNumber){
            counter++;
        }
    }
    console.log(`Number ${searchNumber} occurs ${counter} times.`);
};
searchForNumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5]);