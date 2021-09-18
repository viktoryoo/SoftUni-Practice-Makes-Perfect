function skiTrip(argArr) {
    let daysCheckedIn = Number(argArr[0]);
    let typeOfStay = argArr[1];
    let opinion = argArr[2];

    let moneyForStay = 0;
    let sumAfterDiscount = 0;
    let totalSum = 0;

    switch (opinion) {
        case "positive":
            switch (typeOfStay) {
                case "room for one person":
                    moneyForStay = (daysCheckedIn - 1) * 18;
                    totalSum = moneyForStay + (moneyForStay * 0.25);
                    console.log(totalSum.toFixed(2));
                    break;
                case "apartment":
                    moneyForStay = (daysCheckedIn - 1) * 25;
                    if (daysCheckedIn < 10) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.3);
                    } else if (daysCheckedIn < 15) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.35);
                    } else if (daysCheckedIn > 15) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.5);
                    }
                    totalSum = sumAfterDiscount + (sumAfterDiscount * 0.25);
                    console.log(totalSum.toFixed(2));
                    break;
                case "president apartment":
                    moneyForStay = (daysCheckedIn - 1) * 35;
                    if (daysCheckedIn < 10) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.1);
                    } else if (daysCheckedIn < 15) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.15);
                    } else if (daysCheckedIn > 15) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.2);
                    }
                    totalSum = sumAfterDiscount + (sumAfterDiscount * 0.25);
                    console.log(totalSum.toFixed(2));
                    break;
            }
            break;
        case "negative":
            switch (typeOfStay) {
                case "room for one person":
                    moneyForStay = (daysCheckedIn - 1) * 18;
                    totalSum = moneyForStay - (moneyForStay * 0.1);
                    console.log(totalSum.toFixed(2));
                    break;
                case "apartment":
                    moneyForStay = (daysCheckedIn - 1) * 25;
                    if (daysCheckedIn < 10) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.3);
                    } else if (daysCheckedIn < 15) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.35);
                    } else if (daysCheckedIn > 15) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.5);
                    }
                    totalSum = sumAfterDiscount - (sumAfterDiscount * 0.1);
                    console.log(totalSum.toFixed(2));
                    break;
                case "president apartment":
                    moneyForStay = (daysCheckedIn - 1) * 35;
                    if (daysCheckedIn < 10) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.1);
                    } else if (daysCheckedIn < 15) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.15);
                    } else if (daysCheckedIn > 15) {
                        sumAfterDiscount = moneyForStay - (moneyForStay * 0.2);
                    }
                    totalSum = sumAfterDiscount - (sumAfterDiscount * 0.1);
                    console.log(totalSum.toFixed(2));
                    break;
            }

    }
}
skiTrip([14, "apartment", "positive"]);
skiTrip([12, "room for one person", "positive"]);
skiTrip([30, "president apartment", "negative"]);
skiTrip([2, "apartment", "positive"]);