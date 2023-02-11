function firstAndLast(elements){
     let k = elements.shift();
     let first = elements.slice(0, Number(k));
     let last = elements.slice(elements.length-k);
     console.log(first.join(' '));
     console.log(last.join(' '));
};
firstAndLast([2,

    7, 8, 9]);