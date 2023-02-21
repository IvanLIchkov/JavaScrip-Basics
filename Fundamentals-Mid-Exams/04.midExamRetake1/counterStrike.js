function conter(input){
    let counter = 0;
    let energy =Number(input[0]);
    for(let i = 1; i <input.length ; i++){
        if(input[i]=="End of battle"){
            break;
        }
        let enemy = Number(input[i]);
        if(energy-enemy<0){
            if(energy<0){
                energy=0;
            }
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
            return;
        }else{
            energy-=enemy;
        counter++;
        if(i%3==0){
            energy+=counter;
        }  
        }
    }
    console.log(`Won battles: ${counter}. Energy left: ${energy}`);
};
conter((["200",
"54",
"14",
"28",
"13",
"End of battle"])
)
