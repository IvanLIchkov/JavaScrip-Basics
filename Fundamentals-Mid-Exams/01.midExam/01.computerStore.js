function priceCalculator(input) {
  let i = 0;
  let priceWithoutTaxes = 0;
  let taxes = 0;
  while (i < input.length) {
    let value = input[i];
    if (value == "special" || value == "regular") {
      let totalPrice = priceWithoutTaxes + taxes;
      if (totalPrice > 0) {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        if (value == "special") {
            totalPrice*=0.90;
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
        return;
      }else{
        console.log("Invalid order!")
      }
    } else {
      let partPrice = Number(input[i]);
      if (partPrice <= 0) {
        console.log("Invalid price!");
        i++;
        continue;
      }
      priceWithoutTaxes += partPrice;
      taxes += partPrice * 0.2;
    }
    i++;
  }
}
priceCalculator([
    'regular'
    ])
    
    
;    
