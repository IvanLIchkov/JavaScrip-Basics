function printPhoneBook(input){
    let phonebook = {};

    for (const entry of input) {
        let entryArr = entry.split(' ');
        let name = entryArr[0];
        let number = entryArr[1];

        phonebook[name] = number;
    }
    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
};
printPhoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',
 
'Tim 0876566344']);