function bombNumbers(field, bomb){
    let bombNum = Number(bomb[0]);
    let power = Number(bomb[1]);
    let indexOfBomb = field.indexOf(bombNum);
    while(field.indexOf(bombNum)!=-1){
        if(power ==1){
            field.splice(indexOfBomb+1, power);
        field.splice(indexOfBomb-power, power);
        field.splice(field.indexOf(bombNum),1)
        }else{
           field.splice(indexOfBomb, power);
        field.splice(indexOfBomb-power, indexOfBomb);
        }
        
    }
    console.log(field.reduce((a, b)=> a+b, 0));
};
bombNumbers([1, 2, 2, 4, 2, 2,

    2, 9],
    
    [4, 2])