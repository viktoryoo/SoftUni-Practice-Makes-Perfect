function cat(input){
    let minutesWalking = Number(input[0]);
    let count = Number(input[1]);
    let calories = Number(input[2]);

    let totalMinutes = minutesWalking * count;

    let caloriesBurned = totalMinutes * 5;

    if ( (calories / 2) <= caloriesBurned || calories <= caloriesBurned  ) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`)
    }
}

cat(["15",
"2",
"500"]);
