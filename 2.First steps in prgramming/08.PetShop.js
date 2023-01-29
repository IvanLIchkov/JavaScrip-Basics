function foodPriceCalculator(input) {
  let numberOfDogFood = input[0];
  let numberOfCatFood = input[1];
  let totalPrice = numberOfDogFood * 2.5 + numberOfCatFood * 4;
  console.log(totalPrice) + " lv.";
}
foodPriceCalculator(["5", "4"]);
