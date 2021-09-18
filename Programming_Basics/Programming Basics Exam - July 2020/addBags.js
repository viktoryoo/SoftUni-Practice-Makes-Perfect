function luggage(input){
    let priceLuggage = Number(input[0]);
    let weightLuggage = Number(input[1]);
    let daysToTravel = Number(input[2]);
    let countLuggage = Number(input[3]);


    if (weightLuggage < 10) {
        priceLuggage = priceLuggage * 0.2;
    } else if (weightLuggage >= 10 && weightLuggage <= 20){
        priceLuggage = priceLuggage * 0.5;
    }

    if (daysToTravel > 30) {
        priceLuggage = priceLuggage + priceLuggage * 0.1;
    } else if (daysToTravel <= 30 && daysToTravel >= 7){
        priceLuggage = priceLuggage + priceLuggage * 0.15;
    } else {
        priceLuggage = priceLuggage + priceLuggage * 0.4;
    }

    console.log(`The total price of bags is: ${(priceLuggage * countLuggage).toFixed(2)} lv. `);
}

// luggage(["30",
// "18",
// "15",
// "2"]);

// luggage(["25.50",
// "5",
// "36",
// "6"]);

luggage(["63.80",
"23",
"3",
"1"]);

