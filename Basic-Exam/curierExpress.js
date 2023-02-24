function curier(input) {
  let weight = Number(input[0]);
  let type = input[1];
  let ditance = Number(input[2]);
  let momentDistance = 0;
  switch (type) {
    case "standard":
        if(weight<1){
            ditance*=0.53;
        }else if(weight>=1 && weight<10){
            ditance*=0.05
        }else if(weight>=10 && weight<40){
            ditance*=0.1
        }else if(weight>=40 && weight<90){
            ditance*=0.15
        }else if(weight>=90 && weight<150){
            ditance*=0.2
        }
      break;
    case "express":
        momentDistance = Number(input[2]);
        if(weight<1){
            ditance*=0.03;
        }else if(weight>=1 && weight<10){
            ditance*=0.05
        }else if(weight>=10 && weight<40){
            ditance*=0.1
        }else if(weight>=40 && weight<90){
            ditance*=0.15
        }else if(weight>=90 && weight<150){
            ditance*=0.2
        }
        if(weight<1){
            momentDistance*=(0.03*0.8)*weight;
        }else if(weight>=1 && weight<10){
            momentDistance*=(0.05*0.4)*weight;
        }else if(weight>=10 && weight<40){
            momentDistance*=(0.1*0.05)*weight;
        }else if(weight>=40 && weight<90){
            momentDistance*=(0.15*0.02)*weight;
        }else if(weight>=90 && weight<150){
            momentDistance*=(0.20*0.01)*weight;
        }
      break;
  }
  console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${(ditance+momentDistance).toFixed(2)} lv.`);
}
curier(["1.5",
"standard",
"100"])
