let phoneBookMap = new Map();
phoneBookMap.set('pesho', '12345678');
phoneBookMap.set('gosho', '12345677');
phoneBookMap.set('mariyka', '12345676');

console.log(phoneBookMap.get('pesho'));

if(phoneBookMap.has('gosho')){
    console.log('gosho is in the hpuse');
}
phoneBookMap.delete('gosho');

//itterate keys
for (const key of phoneBookMap.keys()) {
    console.log(key);
}
  
//itterate values
for (const value of phoneBookMap.values()) {
    console.log(value);
}

for (const [name, phone] of phoneBookMap) {
    console.log(`${name} -> ${phone}`);
}

phoneBookMap.forEach((value, key) => {
    console.log(`${key} -> ${value}`);
});