function maxNumber (input) {
    let index = 0;
    let current = input[index];
    let maxNum = Number(current);

    while(current !== "Stop") {
        let currentNumber = Number(current);
        if (maxNum < currentNumber) {
            maxNum = currentNumber;
        }
        index++
        current = input[index];
    }
    console.log (maxNum);
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])
