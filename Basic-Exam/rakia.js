function rakia(input){
    let days = Number(input[0])
    let totalLitres = 0;
    let totalDegrees = 0;
    let j = 0;
    for(let i = 0; i <days ; i++){
        totalLitres += Number(input[j+1]);
        let momentLitres = Number(input[j+1]);
        totalDegrees += Number(input[j+2])*momentLitres;
        j+=2
    }   
    console.log(`Liter: ${totalLitres.toFixed(2)}`);
    let degrees = (totalDegrees/totalLitres).toFixed(2);
    console.log(`Degrees: ${degrees}`);
    if(degrees<38){
    console.log("Not good, you should baking!");
    }else if(degrees>=38 && degrees<42){
        console.log("Super!");
    }else{
        console.log("Dilution with distilled water!");
    }

};
rakia(["2",
"200",
"43",
"200",
"40",])