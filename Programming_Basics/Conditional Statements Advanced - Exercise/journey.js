function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let spendMoney = 0;
    let destination;
    let typeOfVacation;

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            typeOfVacation = "Camp"
            spendMoney = budget - (budget * 0.7);
        } else if (season === "winter") {
            typeOfVacation = "Hotel";
            spendMoney = budget - (budget * 0.3);
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            typeOfVacation = "Camp"
            spendMoney = budget - (budget * 0.6);
        } else if (season === "winter") {
            typeOfVacation = "Hotel";
            spendMoney = budget - (budget * 0.2);
        }
    } else if (budget > 1000) {
        destination = "Europe";
        typeOfVacation = "Hotel"
        spendMoney = budget - (budget * 0.1);
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfVacation} - ${spendMoney.toFixed(2)}`);

}

journey([50, "summer"]);
journey([75, "winter"]);
journey([312, "summer"]);
journey([678.53, "winter"]);
journey([1500, "summer"]);