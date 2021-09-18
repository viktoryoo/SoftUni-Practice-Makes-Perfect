function newHouse(argArr) {
    let nameOfFlower = argArr[0];
    let count = Number(argArr[1]);
    let budget = Number(argArr[2]);

    let totalSum = 0;

    switch (nameOfFlower) {
        case "Roses":
            totalSum = count * 5;
            if (count > 80) {
                totalSum = totalSum - (totalSum * 0.1);
            }
            break;
        case "Dahlias":
            totalSum = count * 3.8;
            if (count > 90) {
                totalSum = totalSum - (totalSum * 0.15);
            }
            break;
        case "Tulips":
            totalSum = count * 2.8;
            if (count > 80) {
                totalSum = totalSum - (totalSum * 0.15);
            }
            break;
        case "Narcissus":
            totalSum = count * 3;
            if (count < 120) {
                totalSum = totalSum + (totalSum * 0.15);
            }
            break;
        case "Gladiolus":
            totalSum = count * 2.5;
            if (count < 80) {
                totalSum = totalSum + (totalSum * 0.2);
            }
            break;
    }
    if (totalSum <= budget) {
        console.log(`Hey, you have a great garden with ${count} ${nameOfFlower} and ${(budget-totalSum).toFixed(2)} leva left.`);
    } else if (totalSum > budget) {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
    }

}
newHouse(["Roses", 55, 250]);
newHouse(["Tulips", 88, 260]);
newHouse(["Narcissus", 119, 360]);