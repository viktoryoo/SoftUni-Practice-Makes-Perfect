function powerByTwo(numArr) {
    let num = Number(numArr[0]);
    for (let i = 0; i <= num; i+=2) {
        console.log(Math.pow(2, i));
    }
}

powerByTwo([3]);

