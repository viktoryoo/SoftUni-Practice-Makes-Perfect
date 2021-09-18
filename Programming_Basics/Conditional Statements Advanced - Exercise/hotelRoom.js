function hotelRoom(input) {
    let month = input[0];
    let daysCheckedIn = Number(input[1]);

    let studio = 0;
    let apartment = 0;
    let sumForApartment = 0;
    let sumForStudio = 0;

    switch (month) {
        case "May":
        case "October":
            studio = 50;
            apartment = 65;
            break;
        case "June":
        case "September":
            studio = 75.20;
            apartment = 68.70;
            break;
        case "July":
        case "August":
            studio = 76;
            apartment = 77;
            break;
    }

    if (daysCheckedIn > 14) {
        apartment = apartment * 0.9;
    }

    sumForApartment = daysCheckedIn * apartment;
    console.log(`Apartment: ${sumForApartment.toFixed(2)} lv.`);

    if (daysCheckedIn > 7 && daysCheckedIn <= 14 && month === "May" || month === "October") {
        studio = studio * 0.95;
    } else if (daysCheckedIn > 14 && month === "May" || month === "October") {
        studio = studio * 0.7;
    } else if (daysCheckedIn > 14 && month === "June" || month === "September") {
        studio = studio * 0.8;
    }

    sumForStudio = daysCheckedIn * studio;
    console.log(`Studio: ${sumForStudio.toFixed(2)} lv.`);

}

hotelRoom(["May", 15]);
hotelRoom(["June", 14]);
hotelRoom(["August", 20]);