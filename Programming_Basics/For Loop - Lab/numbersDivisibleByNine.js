function numbersDivisibleByNine(numArr) {
    let numberOne = Number(numArr[0]);
    let numberTwo = Number(numArr[1]);

    let sum = 0;
    let numberString = "";

    for (let i = numberOne; i <= numberTwo; i++) {
        if (i % 9 == 0) {
            sum += i;
            numberString = numberString + i + "\n";
        }
    }
    console.log (`The sum: ${sum}`);
    console.log (numberString);
}

numbersDivisibleByNine([100, 200]);