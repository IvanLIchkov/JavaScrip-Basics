function greeninCalculator(input) {
  let size = Number(input[0]);
  let priceWithoutDiscount = Number(size * 7.61);
  let discount = Number(priceWithoutDiscount * 0.18);
  let totalPrice = Number(priceWithoutDiscount - discount);
  console.log(`The final price is: ${totalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
greeninCalculator(["550"]);
