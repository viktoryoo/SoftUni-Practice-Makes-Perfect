function games(input) {
    let index = 0;
    let players = Number(input[index]);
    index++;

    let totalN = 0;
    let countWin = 0;
    let countLost = 0;

    for (let i = 1; i <= players; i++) {
        let destination = input[index];
        index++;
        totalN = 0;
        for (let j = 0; j < destination.length; j++) {
            let n = Number(input[index]);
            index++;

            totalN += n;

        }
        if (totalN % destination.length === 0) {
            console.log("Win");
            countWin++;
        } else {
            console.log("Lost");
            countLost++;
        }
    }

    console.log(`Win: ${((countWin / players) * 100).toFixed(2)}%`);
    console.log(`Lost: ${((countLost / players) * 100).toFixed(2)}%`);


}

games([2, "Bali", 4, 11, 4, 1, "Bora Bora", 23, 34, 65, 14, 76, 34, 76, 34, 98]);
games([3, "Maldives", 1, 1, 1, 1, 1, 1, 1, 1, "Fiji", 11, 4, 85, 18, "Capri", 54, 23, 83, 34, 16]);