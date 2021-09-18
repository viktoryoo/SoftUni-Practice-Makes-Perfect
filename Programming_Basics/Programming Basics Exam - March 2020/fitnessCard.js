function fitness(input) {
    let money = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let prize = 0;

    switch (sport) {
        case "Gym":
            if (gender === "m") {
                prize = 42;
            } else {
                prize = 35;
            }
            break;
        case "Boxing":
            if (gender === "m") {
                prize = 41;
            } else {
                prize = 37;
            }
            break;
        case "Yoga":
            if (gender === "m") {
                prize = 45;
            } else {
                prize = 42;
            }
            break;
        case "Zumba":
            if (gender === "m") {
                prize = 34;
            } else {
                prize = 31;
            }
            break;
        case "Dances":
            if (gender === "m") {
                prize = 51;
            } else {
                prize = 53;
            }
            break;
        case "Pilates":
            if (gender === "m") {
                prize = 39;
            } else {
                prize = 37;
            }
            break;
    }

    if (age <= 19){
        prize = prize * 0.8;
    }

    if (money >= prize) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(prize - money).toFixed(2)} more.`);
    }
}

fitness(["20",
"f",
"15",
"Yoga"]);
