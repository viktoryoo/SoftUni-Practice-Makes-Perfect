function multiplicationTable (numArr) {
    let n = Number(numArr[0]);

    let result = 0;

    for (let i = 1; i <= 10; i++){
        result = i * n;
        console.log(`${i} * ${n} = ${result}`);
    }
    
}

multiplicationTable([10]);