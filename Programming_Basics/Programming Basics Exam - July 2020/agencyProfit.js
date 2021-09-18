function profit(input){
    let name = input[0];
    let adultTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let adultPriceTickets = Number(input[3]);
    let taxFee = Number(input[4]);

    let kidsPriceTickets = adultPriceTickets *0.3;
    let adultPriceAfterFee = adultPriceTickets + taxFee;
    let kidsPriceAfterFee = kidsPriceTickets + taxFee;
    
    let totalSum = (adultPriceAfterFee * adultTickets) + (kidsPriceAfterFee * kidsTickets);

    console.log (`The profit of your agency from ${name} tickets is ${(totalSum * 0.2).toFixed(2)} lv.`);
}

profit(["WizzAir",
    15,
    5,
    120,
    40
    ]);

profit(["Ryanair",
"60",
"23",
"158.96",
"39.12"]);
