function vacationBookList(input){
    let numberOfPages = Number(input[0]);
    let readPagesForHour = Number(input[1]);
    let days = Number(input[2]);
    let result = (numberOfPages/readPagesForHour)/days;
    console.log(result);
}
vacationBookList([432, 15, 4]);