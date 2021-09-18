function factorial(numArr) {
    let n = Number(numArr[0]);

    let result = 1

    for (let i = 2; i <= n; i++){
        result = result * i;
    }
    console.log(result);
}

factorial([8]);