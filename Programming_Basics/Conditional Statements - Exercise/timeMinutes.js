function timeMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes;
    let totalMinutesAfter = totalMinutes + 15;

    let finalHours = Math.floor(totalMinutesAfter / 60);

    if (finalHours > 23) {
        finalHours = 0;
    }

    let finalMinutes = totalMinutesAfter % 60;

    if (finalMinutes < 10) {
        console.log(`${finalHours}:0${finalMinutes}`);
    } else {
        console.log(`${finalHours}:${finalMinutes}`);
    }
}

timeMinutes([1, 46]);