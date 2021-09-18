function booster(input){
    let fruit = input[0];
    let size = input[1];
    let count = Number(input[2]);

    let prize = 0;

    switch (fruit) {
        case "Watermelon":
            if (size === "small"){
                prize = 56 * 2;
            } else {
                prize = 28.70 * 5;
            }
            break;
        case "Mango":
            if (size === "small"){
                prize = 36.66 * 2;
            } else {
                prize = 19.60 * 5;
            }
            break;
        case "Pineapple":
            if (size === "small"){
                prize = 42.10 * 2;
            } else {
                prize = 24.80 * 5;
            }
            break;
        case "Raspberry":
            if (size === "small"){
                prize = 20 * 2;
            } else {
                prize = 15.20 * 5;
            }
            break;
    }

    let totalSum = prize * count;

    if (totalSum >= 400 && totalSum <= 1000) {
        totalSum = totalSum * 0.85;
    } else if (totalSum > 1000) {
        totalSum = totalSum * 0.5;
    }

    console.log(`${totalSum.toFixed(2)} lv.`);
}

booster(["Mango",
"big",
"8"]);