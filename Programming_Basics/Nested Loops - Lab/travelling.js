function traveling(input) {
    let destination = "";
    let minBudget = 0;

    for (i = 0; i < input.length; i++) {
        if (input[i] === "End") {
            break;
        }

        destination = input[i++];
        minBudget = Number(input[i]);

        let totalSavings = 0;
        while (totalSavings < minBudget){
            i++
            totalSavings += Number(input[i]);
        }
        console.log(`Going to ${destination}!`);
    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
