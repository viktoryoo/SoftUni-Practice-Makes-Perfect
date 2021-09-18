function bus(input) {
    let index = 0;
    let passengers = Number(input[index]);
    index++;

    let stops = Number(input[index]);
    index++;

    let control = 0;

    for (let i = 1; i <= stops; i++) {
        let passengersOut = Number(input[index]);
        index++;

        let passengersIn = Number(input[index]);
        index++

        if (i % 2 !== 0) {
            control = 2;
            passengers = passengers - passengersOut + passengersIn + control;
        } else {
            passengers = passengers - passengersOut + passengersIn - control;
        }
    }
    console.log(`The final number of passengers is : ${passengers}`);

}

bus([20, 2, 10, 5, 5, 3]);
bus([25, 5, 14, 15, 9, 11, 10, 13, 6, 7, 10, 8]);
bus([17, 3, 6, 7, 8, 9, 3, 4]);