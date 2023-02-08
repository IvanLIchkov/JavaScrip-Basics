function astra(text){
    let regexp = /(#|\|)(?<item>[A-Za-z ]+)\1(?<date>[0-9]{2,}\/[0-9]{2,}\/[0-9]{2,})\1(?<calories>[0-9]+)\1/g;
    let validFoods = [];
    let validFood =null;
    while((validFood = regexp.exec(text))!=null){
        validFoods.push(validFood[0]);
    }
    let calories = Number(0);
    for(let i = 0; i <validFoods.length ; i++){
        let food = validFoods[i].split(/[#|]+/)
        calories+=Number(food[food.length-2]);
    }
    console.log(`You have food to last you for: ${Math.floor(calories/2000)} days!`);
    for(let i = 0; i <validFoods.length ; i++){
        let food = validFoods[i].split(/[#|]/)
        console.log(`Item: ${food[1]}, Best before: ${food[2]}, Nutrition: ${food[3]}`)
    }
}
astra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    
    )