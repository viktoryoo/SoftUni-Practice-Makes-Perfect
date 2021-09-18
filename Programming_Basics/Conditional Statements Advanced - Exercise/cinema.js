function cinema(argArr) {
    let typeOfProjection = argArr[0];
    let r = Number(argArr[1]);
    let c = Number(argArr[2]);

    let totalSum = 0;

    switch (typeOfProjection) {
        case "Premiere":
            totalSum = 12 * r * c;
            console.log(`${totalSum.toFixed(2)} leva`);
            break;
        case "Normal":
            totalSum = 7.5 * r * c;
            console.log(`${totalSum.toFixed(2)} leva`);
            break;
        case "Discount":
            totalSum = 5 * r * c;
            console.log(`${totalSum.toFixed(2)} leva`);
            break;
        
    }
}
cinema(["Premiere", 10, 12]);
cinema(["Normal", 21, 13]);
cinema(["Discount", 12, 30]);