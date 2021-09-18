function sisterLilly(numArr) {
    let age = Number(numArr[0]);
    let priceWasher = Number(numArr[1]);
    let priceToy = Number(numArr[2]);

    let savedMoney = 0;
    let currentMoneyPresent = 0;
    let toyCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            currentMoneyPresent += 10;
            savedMoney += currentMoneyPresent;
            savedMoney--;
        } else {
            toyCount++;
        }
    }

    savedMoney += toyCount * priceToy;

    if (savedMoney >= priceWasher) {
        console.log(`Yes! ${(savedMoney - priceWasher).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWasher - savedMoney).toFixed(2)}`);
    }

}

sisterLilly([10, 170, 6]);