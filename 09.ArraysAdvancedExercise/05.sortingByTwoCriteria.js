function sort2Criteria(input){
    let newArr = input.sort().sort((word1, word2) => word1.length-word2.length);
    for (const string of newArr) {
        console.log(string);
    }
};
sort2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);