function demo(input){
    let priceCPU = Number(input[0])*1.57;
    let priceVideo = Number(input[1])*1.57;
    let priceRam = Number(input[2])*1.57;
    let numsOfRam = Number(input[3]);
    priceRam*=numsOfRam;
    let dicount =1- (Number(input[4]));
    priceCPU*=dicount;
    priceVideo*=dicount;
    console.log(`Money needed - ${(priceCPU+priceRam+priceVideo).toFixed(2)} leva`);
}
demo(["1200",
"850",
"120",
"4",
"0.1"])