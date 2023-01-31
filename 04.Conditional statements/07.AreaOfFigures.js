function areaOfFigures(input){
    let typeOfFigure = input[0];
    let result;
    let side = input[1];
    if(typeOfFigure=="square"){
        result = side*side;
    } else if(typeOfFigure=="rectangle"){
        let sideOfrectangle = input[2];
        result = side*sideOfrectangle;
    }  else if(typeOfFigure == "circle"){
        result= Math.PI*(side*side);
    }else{
        let h = input[2];
        result = (side*h)/2;
    }
    console.log(result.toFixed(3));
}
areaOfFigures(["triangle",
"4.5",
"20"])


