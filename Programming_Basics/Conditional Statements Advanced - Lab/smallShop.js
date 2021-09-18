function smallShop(args) {
    let product = args[0];
    let town = args[1];
    let count = Number(args[2]);

    let totalPrice = 0;

    switch (product) {
        case "coffee":
            if (town === "Sofia") {
                totalPrice = 0.5 * count;
                console.log(totalPrice);
            } else if (town === "Plovdiv") {
                totalPrice = 0.4 * count;
                console.log(totalPrice);
            } else if (town === "Varna") {
                totalPrice = 0.45 * count;
                console.log(totalPrice);
            }
            break;
        case "water":
            if (town === "Sofia") {
                totalPrice = 0.8 * count;
                console.log(totalPrice);
            } else if (town === "Plovdiv") {
                totalPrice = 0.7 * count;
                console.log(totalPrice);
            } else if (town === "Varna") {
                totalPrice = 0.7 * count;
                console.log(totalPrice);
            }
            break;
        case "beer":
            if (town === "Sofia") {
                totalPrice = 1.2 * count;
                console.log(totalPrice);
            } else if (town === "Plovdiv") {
                totalPrice = 1.15 * count;
                console.log(totalPrice);
            } else if (town === "Varna") {
                totalPrice = 1.10 * count;
                console.log(totalPrice);
            }
            break;
        case "sweets":
            if (town === "Sofia") {
                totalPrice = 1.45 * count;
                console.log(totalPrice);
            } else if (town === "Plovdiv") {
                totalPrice = 1.30 * count;
                console.log(totalPrice);
            } else if (town === "Varna") {
                totalPrice = 1.35 * count;
                console.log(totalPrice);
            }
            break;
        case "peanuts":
            if (town === "Sofia") {
                totalPrice = 1.6 * count;
                console.log(totalPrice);
            } else if (town === "Plovdiv") {
                totalPrice = 1.5 * count;
                console.log(totalPrice);
            } else if (town === "Varna") {
                totalPrice = 1.55 * count;
                console.log(totalPrice);
            }
            break;
        default:
            console.log("Error");
    }
}

smallShop(["coffee", "Varna", 2]);
smallShop(["peanuts", "Plovdiv", 1]);
smallShop(["beer", "Sofia", 6]);
smallShop(["water", "Plovdiv", 3]);
smallShop(["sweets", "Sofia", 2.23]);