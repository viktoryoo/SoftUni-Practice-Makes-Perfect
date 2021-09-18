function cake(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;

    let sizeOfCake = l * w;
    let command = input[index]
    index++;

    let isValid = true;

    while (command !== "STOP") {
        let pieces = Number(command);
        sizeOfCake -= pieces;

        if (sizeOfCake < 0) {
            // let diff = sizeOfCake - pieces;
            console.log(`No more cake left! You need ${Math.abs(sizeOfCake)} pieces more.`);
            isValid = false;
            break;
        }

        command = input[index];
        index++;
    }
    if (isValid) {
        console.log(`${sizeOfCake} pieces are left.`);
    }
}


cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"
]);
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);