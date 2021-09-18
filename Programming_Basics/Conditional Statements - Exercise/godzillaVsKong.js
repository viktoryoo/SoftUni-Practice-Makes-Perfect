function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothing = Number(input[2]);

    let decor = budget * 0.1;

    if (extras > 150) {
        clothing = clothing * 0.9;
    }

    let moneyForClothing = extras * clothing;
    let totalSum = moneyForClothing + decor;
    let diff = budget - totalSum;
    if (diff >= 0) {
        diff = Math.abs(diff);
        console.log("Action!");
        console.log(`Wingard starts filming with ${(diff).toFixed(2)} leva left.`);
    } else {
        diff = Math.abs(diff);
        console.log("Not enough money!");
        console.log(`Wingard needs ${(diff).toFixed(2)} leva more.`);
    }

}
godzillaVsKong([20000, 120, 55.5]);
godzillaVsKong([9587.88, 222, 55.68]);