let phonebook = {
    ivaylo: '123456789',
    pesho: '123456788',
    gosho: '123456787',
    stamat: '123456786',
    mariika: '123456785',
    petko: '123456784',
};

//check if there is and entry
if(phonebook.hasOwnProperty('ivaylo')){
    console.log("Entry found");
}
if(phonebook['pesho']){
    console.log('Enrty found '+phonebook['pesho']);
}