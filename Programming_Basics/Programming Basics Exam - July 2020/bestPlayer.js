function bestPlayer(input){
    let index = 0;
    let current = input[index];
    
    let goals = Number.MIN_SAFE_INTEGER;

    let player = "";
    while (current !== "END") {
        let bestPlayer = input[index];
        index++
        let currentGoals = Number(input[index]);

        if (currentGoals > goals) {
            goals = currentGoals;
            player = bestPlayer;
        }

        index++
        current = input[index];

        if (goals >= 10){
            break;
        }
    }
    console.log (`${player} is the best player!`);
    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goals} goals.`);
    }
    
}

bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])



