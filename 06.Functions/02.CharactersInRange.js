function charactersInRange(firstChar, lastChar){
    let firstNum = firstChar.charCodeAt(0);
    let secondNum =lastChar.charCodeAt(0);
    let arr = new Array;
    if (firstNum<secondNum){
        for(let i = firstNum+1; i <secondNum ; i++){
            arr.push(String.fromCharCode(i));
        }
    }else{
        for(let i = secondNum+1; i <firstNum ; i++){
            arr.push(String.fromCharCode(i));
        }
    }
    console.log(arr.join(' '));
}
charactersInRange('#',

':')