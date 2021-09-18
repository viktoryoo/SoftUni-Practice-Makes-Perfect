function invalidNumber(numArr) {
    let num = Number(numArr[0]);

    let isValid = (num >= 100 && num <= 200) || num == 0;
    
    if (!isValid) {
        console.log("invalid");
    }
}

invalidNumber(75);
invalidNumber(150);