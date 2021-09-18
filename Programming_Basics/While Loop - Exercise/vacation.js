function vacation (input) {
    let index = 0;

    let needMoney = Number(input[index]);
    index ++;

    let money = Number(input[index]);
    index++;

    let counter = 0;

    let dayCounter = 0;

    while (money < needMoney) {
        dayCounter++
        let action = input[index];
        index++;

        let tmpMoney = Number(input[index]);
        index++;

        if (action === "spend") {
            money -= tmpMoney;
            if (money < 0) {
                money = 0;
            }
            counter++;
        } else {
            money += tmpMoney;
            counter = 0;
        }

        if (counter === 5) {
            console.log("You can't save the money.");
            console.log(dayCounter);
            break;
        }

    }

    if (money >= needMoney) {
        console.log(`You saved the money for ${dayCounter} days.`)
    }


}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);
