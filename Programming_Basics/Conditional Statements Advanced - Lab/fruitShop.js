function fruitShop (argsArr) {
    let fruit = argsArr[0];
    let dayOfWeek = argsArr[1];
    let count = Number(argsArr[2]);

    let totalPrice = 0;

    if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
        if (fruit === "banana") {
            totalPrice = 2.5 * count;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "apple") {
            totalPrice = 1.2 * count;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "orange") {
            totalPrice = 0.85 * count;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapefruit") {
            totalPrice = 1.45 * count;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "kiwi") {
            totalPrice = 2.7 * count;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "pineapple") {
            totalPrice = 5.5 * count;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapes") {
            totalPrice = 3.85 * count;
            console.log(totalPrice.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        if (fruit === "banana") {
            totalPrice = 2.7 * count;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "apple") {
            totalPrice = 1.25 * count;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "orange") {
            totalPrice = 0.9 * count;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapefruit") {
            totalPrice = 1.6 * count;
            console.log(totalPrice.toFixed(2));
        }  else if (fruit === "kiwi") {
            totalPrice = 3 * count;
            console.log(totalPrice.toFixed(2));
        }  else if (fruit === "pineapple") {
            totalPrice = 5.6 * count;
            console.log(totalPrice.toFixed(2));
        }  else if (fruit === "grapes") {
            totalPrice = 4.20 * count;
            console.log(totalPrice.toFixed(2));
        } else {
            console.log ("error");
        }
    } else {
        console.log ("error");
    }
}

fruitShop(["apple", "Tuesday", 2]);
fruitShop(["orange", "Sunday", 3]);
fruitShop(["tomato", "Monday", 0.5]);