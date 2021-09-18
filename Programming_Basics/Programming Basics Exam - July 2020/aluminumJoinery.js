function joinery(input) {
    let countJoinery = Number(input[0]);
    let typeJoinery = input[1];
    let delivery = input[2];

    let price = 0;

    if (countJoinery < 10) {
        console.log("Invalid order");
    } else {
        switch (typeJoinery) {
            case "90X130":
                price = countJoinery * 110;
                if (countJoinery > 30 && countJoinery <= 60) {
                    price = price * 0.95;
                } else if (countJoinery > 60) {
                    price = price * 0.92;
                }
                break;
            case "100X150":
                price = countJoinery * 140;
                if (countJoinery > 40 && countJoinery <= 80) {
                    price = price * 0.94;
                } else if (countJoinery > 80) {
                    price = price * 0.90;
                }
                break;
            case "130X180":
                price = countJoinery * 190;
                if (countJoinery > 20 && countJoinery <= 50) {
                    price = price * 0.93;
                } else if (countJoinery > 50) {
                    price = price * 0.88;
                }
                break;
            case "200X300":
                price = countJoinery * 250;
                if (countJoinery > 25 && countJoinery <= 50) {
                    price = price * 0.91;
                } else if (countJoinery > 50) {
                    price = price * 0.86;
                }
                break;

        }
        if (delivery === "With delivery") {
            price += 60;
        }
        if (countJoinery > 99) {
            price = price * 0.96;
        }

        console.log(`${price.toFixed(2)} BGN`);
    }




}

joinery(["40",
    "90X130",
    "Without delivery"
]);
joinery(["105",
"100X150",
"With delivery"]);
joinery(["2",
    "130X180",
    "With delivery"
]);