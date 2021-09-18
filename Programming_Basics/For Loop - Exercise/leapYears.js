function leapYears (input) {
    let firstYear = Number(input[0]);
    let endYear = Number(input[1]);

    for(let i = firstYear; i <= endYear; i+=4) {
        console.log(i);
    }
}

leapYears([2020, 2032]);