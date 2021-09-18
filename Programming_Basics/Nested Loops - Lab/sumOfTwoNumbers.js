function sumOfNumbers(input){
    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationCount = 0;
    let flag = false;

    for (let i = firstNumber; i <= lastNumber; i++) {
        for (let j = firstNumber; j <= lastNumber; j++){
            combinationCount++;
            if (i + j === magicNumber){
                console.log(`Combination N:${combinationCount} (${i} + ${j} = ${i + j})`);
                flag = true;
                break;
            }
        }
        if (flag){
            break;
        }
    }
    
    if (!flag) {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
    }
}

sumOfNumbers([1, 10, 5]);
sumOfNumbers([23, 24, 20]);