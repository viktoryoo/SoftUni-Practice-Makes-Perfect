function numbersNStepThree(numArr) {
    let num = Number(numArr[0]);

    for (i = 1; i <= num; i += 3) {
        console.log(i);
    }
}

numbersNStepThree(10);