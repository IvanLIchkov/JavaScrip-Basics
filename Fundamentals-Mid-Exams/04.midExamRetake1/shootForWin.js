function shoot(input){
    let targets = input[0].split(" ").map(Number);
    let shootCounter = 0;
    for(let i = 1; i <input.length ; i++){
        let index = Number(input[i]);
            if(index>=0  && index < targets.length){
                let momentNum = targets[index];
                if(momentNum == -1){
                    continue;
                }
                shootCounter++;
                targets[index] = -1;
                for(let i = 0; i <targets.length ; i++){
                    let momentTarget = targets[i];
                    if(momentTarget!=-1){
                        if(momentTarget>momentNum){
                            targets[i]  = momentTarget-momentNum;
                        }else{
                            targets[i] = momentTarget+momentNum;
                        }
                    }
                }
            }
    }
    console.log(`Shot targets: ${shootCounter} -> ${targets.join(' ')}`);
};
shoot((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

)