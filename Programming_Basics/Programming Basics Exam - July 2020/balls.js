function balls(input) {
    let index = 0;

    let n = Number(input[index]);
    index++;

    let points = 0;
    let counterRed = 0;
    let counterOrange = 0;
    let counterYellow = 0;
    let counterWhite = 0;
    let counterBlack = 0;
    let counter = 0;
    for (let i = 0; i < n; i++) {
        let typeOfBall = input[index];
        index++;
        switch (typeOfBall) {
            case "red":
                points += 5;
                counterRed++
                break;
            case "orange":
                points += 10;
                counterOrange++
                break;
            case "yellow":
                points += 15;
                counterYellow++
                break;
            case "white":
                points += 20;
                counterWhite++
                break;
            case "black":
                points = points / 2;
                counterBlack++
                break;
            default:
                counter++
                break;
        }
    }
    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Points from red balls: ${counterRed}`);
    console.log(`Points from orange balls: ${counterOrange}`);
    console.log(`Points from yellow balls: ${counterYellow}`);
    console.log(`Points from white balls: ${counterWhite}`);
    console.log(`Other colors picked: ${counter}`);
    console.log(`Divides from black balls: ${counterBlack}`);

}

// balls(["3",
//     "white",
//     "black",
//     "pink"
// ]);

// balls(["5",
// "red",
// "red",
// "ddd",
// "ddd",
// "ddd"]);

balls([10,
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"]);
