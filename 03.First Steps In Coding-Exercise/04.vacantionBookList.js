function bookList(input){
    let pages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);

    let totalHoursPerDay = (pages/pagesForHour)/days;
    console.log(totalHoursPerDay);
}
bookList(["212 ",
"20 ",
"2 "]
)