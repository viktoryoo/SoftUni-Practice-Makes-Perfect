function countNum (input) {
    let num = Number(input[0]);

    let count = 1;

    while (count <= num) {
        console.log(count);
        count = count * 2 + 1;
    }

}

countNum([8]);