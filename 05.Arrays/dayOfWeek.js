function dayOfWeek(input){
    let myArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = Number(input);
    if(day>=1 && day<=7){
        console.log(myArr[input-1]);
    }else{
        console.log("Invalid day!")
    }
}
dayOfWeek(3)