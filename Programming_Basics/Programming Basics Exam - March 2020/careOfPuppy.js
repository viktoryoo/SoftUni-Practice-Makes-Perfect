function puppy(input) {
    let index = 0;
    let foodBought = Number(input[index]);
    index++;
    let current = input[index];
    index++;

    let totalFood = 0;
    let foodInGrams = foodBought * 1000;

    while (current !== "Adopted") {
        let foodEveryMeal = Number(current);
        totalFood += foodEveryMeal;

        current = input[index];
        index++
    }

    if (foodInGrams >= totalFood) {
        console.log(`Food is enough! Leftovers: ${foodInGrams - totalFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${totalFood - foodInGrams} grams more.`);
    }
}

puppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"
]);