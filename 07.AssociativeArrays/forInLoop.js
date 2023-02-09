let phonebook = {
    ivaylo: '123456789',
    pesho: '123456788',
    gosho: '123456787',
    stamat: '123456786',
    mariika: '123456785',
    petko: '123456784',
};
for (let name in phonebook){
    console.log(`${name} -> ${phonebook[name]}`);
}
let arr = ['pesho', 'gosho', 'ivan'];
for (const iterator of arr) {
    console.log(iterator);
}