function reception(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let students = Number(input[3]);
    let hours = 0;
    while(students>0){
        hours++;
        if(hours%4!=0){
            students-=first+second+third
        }
    }
    console.log(`Time needed: ${hours}h.`);
};
reception(['3','2','5','40'])