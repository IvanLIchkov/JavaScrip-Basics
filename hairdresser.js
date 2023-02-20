function hairdresser(input) {
  let target = Number(input[0]);
  let totalMoney = 0;
  for (let i = 1; i < input.length; i += 2) {
    if (totalMoney >= target) {
      console.log("You have reached your target for the day!");
      console.log(`Earned money: ${totalMoney}lv.`);
      return;
    }
    let type = input[i];
    if (type == "closed") {
      if (totalMoney >= target) {
        console.log("You have reached your target for the day!");
        console.log(`Earned money: ${totalMoney}lv.`);
      } else {
        console.log(
          `Target not reached! You need ${target - totalMoney}lv. more.`
        );
        console.log(`Earned money: ${totalMoney}lv.`);
      }
      return;
    }
    let typeOfType = input[i + 1];
    switch (type) {
      case "haircut":
        switch (typeOfType) {
          case "mens":
            totalMoney += 15;
            break;
          case "ladies":
            totalMoney += 20;
            break;
          case "kids":
            totalMoney += 10;
        }
        break;
      case "color":
        switch (typeOfType) {
          case "touch up":
            totalMoney += 20;
            break;
          case "full color":
            totalMoney += 30;
        }
    }
  }
  if (totalMoney >= target) {
    console.log("You have reached your target for the day!");
    console.log(`Earned money: ${totalMoney}lv.`);
  } else {
    console.log(
      `Target not reached! You need ${target - totalMoney}lv. more.`
    );
    console.log(`Earned money: ${totalMoney}lv.`);
  }
}
hairdresser(["50",
"color",
"full color",
"haircut",
"ladies"])
