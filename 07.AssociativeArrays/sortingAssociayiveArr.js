let phonebook = {
    ivaylo: '123456789',
    pesho: '123456788',
    gosho: '123456787',
    stamat: '123456786',
    mariika: '123456785',
    petko: '123456784',
};

//convert associative array to normal array
let phoneBookEntries = Object.entries(phonebook);

//sort the array
phoneBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0])); //sort by keys
// phoneBookEntries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));//shortcut
phoneBookEntries.sort((valueA, valueB) => valueA[1].localeCompare(valueB[1]));//sort by values


//optional;; convert back to associative array
let sortedPhoneBook = Object.fromEntries(phoneBookEntries);
console.log(sortedPhoneBook);