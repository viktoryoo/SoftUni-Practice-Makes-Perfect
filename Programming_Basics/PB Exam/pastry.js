function pastry(input) {
    let typeOfPastry = input[0];
    let count = Number(input[1]);
    let dayOfDecember = Number(input[2]);

    let currentPrice = 0;
    switch (typeOfPastry) {
        case "Cake":
            if (dayOfDecember <= 15) {
                currentPrice = 24;
            } else {
                currentPrice = 28.70;
            }
            break;
        case "Souffle":
            if (dayOfDecember <= 15) {
                currentPrice = 6.66;
            } else {
                currentPrice = 9.80;
            }
            break;
        case "Baklava":
            if (dayOfDecember <= 15) {
                currentPrice = 12.60;
            } else {
                currentPrice = 16.98;
            }
            break;
    }

    let totalSum = currentPrice * count;

    if (dayOfDecember <= 22) {
        if (totalSum >= 100 && totalSum <= 200) {
            totalSum = totalSum * 0.85;
        } else if (totalSum > 200) {
            totalSum = totalSum * 0.75;
        }
    }
    if (dayOfDecember <= 15) {
        totalSum = totalSum * 0.9
    }

    console.log(totalSum.toFixed(2));
}

pastry(["Cake", "10", "15"]);
pastry(["Souffle", "20", "24"]);
pastry(["Baklava", "50", "1"]);
pastry(["Cake", "5", "12"]);