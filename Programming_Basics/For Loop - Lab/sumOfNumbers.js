function sumOfNumbers(numArr) {
    let n = numArr[0];

    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        let currentNum = Number(n[i]);
        sum += currentNum;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);