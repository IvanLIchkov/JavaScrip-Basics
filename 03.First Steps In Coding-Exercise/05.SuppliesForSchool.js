function supplies(input){
    let pens = Number(input[0])*5.8;
    let markers = Number(input[1])*7.2;
    let detergent = Number(input[2])*1.2;
    let discount = Number(100-input[3])/100;

    let totalPrice = (pens+markers+detergent)*discount;
    console.log(totalPrice);
}
supplies(["2 ",
"3 ",
"4 ",
"25 "]
);