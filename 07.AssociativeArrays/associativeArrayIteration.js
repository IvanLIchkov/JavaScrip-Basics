let phonebook = {
  ivaylo: "123456789",
  pesho: "123456788",
  gosho: "123456787",
  stamat: "123456786",
  mariika: "123456785",
  petko: "123456784",
};

let phoneBookEntries = Object.entries(phonebook);

for (const keyValuePair of phoneBookEntries) {
  let name = keyValuePair[0];
  let number = keyValuePair[1];
  console.log(`${name} -> ${number}`);
}

//shorter version
for (let kvp of Object.entries(phonebook)){
    let [name, phone] = kvp;
    console.log(`${name} -> ${number}`);
}

//more shorter version
for (let [name, phone] of Object.entries(phoneBook)){
    console.log(`${name} -> ${number}`);
}
