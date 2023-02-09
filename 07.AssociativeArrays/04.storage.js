function storageApp(input){
    let storage = {};

    for (const line of input) {
        let [typeOfItem, quantity] = line.split(' ');
        if(storage[typeOfItem]){
            storage[typeOfItem] +=Number(quantity);
            continue;
        }
        storage[typeOfItem] =Number(quantity);
    }
    for (const [type, quantity] of Object.entries(storage)) {
        console.log(`${type} -> ${quantity}`);
    }
};
storageApp(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])