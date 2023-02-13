function party(input){
    let guests = [];
    for (const line of input) {
        let arr = line.split(' ');
        let name = arr[0];
        if(arr.length==3){
            if(!guests.includes(name)){
                guests.push(name);
            }else{
                console.log(`${name} is already in the list!`);
            }
        }else if(arr.length==4){
            if(guests.includes(name)){
              guests =  guests.filter(names=> names!==name);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
    for (const guest of guests) {
        console.log(guest);
    }
};
party(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);