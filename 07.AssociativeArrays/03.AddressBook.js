function createAddressBook(input){
    let addressBook = {};

    for (const entry of input) {
        let [name, address] = entry.split(':');
        addressBook[name] = address;
    }
    let sortedPhoneBookByName = (Object.entries(addressBook)).sort((nameA, nameB) => nameA[0].localeCompare(nameB[0]));
    for (const [name, address] of sortedPhoneBookByName) {
        console.log(`${name} -> ${address}`);
    }

};
createAddressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])