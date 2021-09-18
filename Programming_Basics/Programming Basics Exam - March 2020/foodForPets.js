function pets(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);

    let index = 2;
    let count = 0;
    let biscuits = 0;
    let totalDogFood = 0;
    let totalCatFood = 0;

    for (let i = 1; i <= days; i++) {
        count++;
        let dogFood = Number(input[index]);
        totalDogFood += dogFood;
        index++;

        let catFood = Number(input[index]);
        totalCatFood += catFood;
        index++;

        if (count % 3 === 0) {
            biscuits = (dogFood + catFood) - (dogFood + catFood) * 0.9;
        }
    }

    let totalFood = totalCatFood + totalDogFood;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${((totalFood/food) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((totalDogFood/totalFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((totalCatFood/totalFood) * 100).toFixed(2)}% eaten from the cat.`);
}

pets([3,
    500,
    100,
    30,
    110,
    25,
    120,
    35
]);