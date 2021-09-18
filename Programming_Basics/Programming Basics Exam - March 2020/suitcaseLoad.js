function suitcase(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let count = 0;
    while (command !== "End") {
        let luggage = Number(command);

        if (capacity < luggage) {
            console.log("No more space!");
            break;
        } else {
            count++;
            if (count % 3 === 0) {
                luggage = luggage * 1.10;
            }

            capacity -= luggage;
        }


        command = input[index];
        index++;
    }
    if (command === "End") {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${count} suitcases loaded.`);
}

// suitcase(["550",
// "100",
// "252",
// "72",
// "End"]);

// suitcase(["700.5",
//     "180",
//     "340.6",
//     "126",
//     "220"
// ]);

suitcase(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"]);