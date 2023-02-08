function memoryGame(input){
    let board =input[0].split(" ");
    let moves = 0;
    let i=1;
    let command = input[i].split(" ");
    while(command[0]!="end"){
        moves++;
        let firstIndex = Number(command[0]);
        let secondIndex = Number(command[1]);
        if(firstIndex <0 || firstIndex>=board.length || secondIndex<0 || secondIndex>=board.length || firstIndex==secondIndex){
            console.log("Invalid input! Adding additional elements to the board");
            let indexToAdd = board.length/2;
            board.splice(indexToAdd, 0 , `-${moves}a`);
            board.splice(indexToAdd+1, 0 , `-${moves}a`);
        }else{
            if(board[firstIndex]==board[secondIndex]){
                console.log(`Congrats! You have found matching elements - ${board[firstIndex]}!`);
                if(firstIndex<secondIndex){
                    board.splice(secondIndex, 1);
                    board.splice(firstIndex, 1);
                }else{
                    board.splice(firstIndex, 1);
                    board.splice(secondIndex, 1); 
                }
                if(board.length==0){
                    console.log(`You have won in ${moves} turns!`);
                    return;
                }
            }else{
                console.log("Try again!");
            }
        }
        i++;
        command = input[i].split(" ");
    }
    console.log("Sorry you lose :(");
    console.log(board.join(" "));
}
memoryGame( [
"a 2 4 a 2 4", 
"4 0", 
"0 2",
"0 1",
"0 1", 
"end"
]

    
    );