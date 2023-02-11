function smallestTwoNums(input){
    let sortedInAscendingOrder = input.sort((a, b) =>{
        return a-b; 
    });
    console.log(sortedInAscendingOrder.slice(0,2).join(' '));
};
smallestTwoNums([3, 0, 10, 4, 7, 3])