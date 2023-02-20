function bracelets(input){
    let pocketMoney = Number(input[0])*5;
    let moneyPerDayEarn = Number(input[1])*5;
    let expences = Number(input[2]);
    let giftPrice = Number(input[3]);
    let totalEarn = (pocketMoney+moneyPerDayEarn)-expences;
    if(totalEarn >=giftPrice){
        console.log(`Profit: ${totalEarn.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${(giftPrice-totalEarn).toFixed(2)} BGN.`);
    }
};
bracelets(["15.20",
"200.00",
"7.30",
"1500.12"])