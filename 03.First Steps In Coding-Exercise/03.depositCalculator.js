function depositCalculator(input){
    let depositSum = Number(input[0]);
    let depositLenght = Number(input[1]);
    let yerarPercent = Number(input[2]/100);
    let totalSum = depositSum+(depositLenght*((depositSum*yerarPercent)/12));
    console.log(totalSum);
}
depositCalculator(["200 ",
"3 ",
"5.7 "]
);