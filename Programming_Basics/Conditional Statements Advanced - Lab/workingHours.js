function workingHours(argsArr) {
    let hour = Number(argsArr[0]);
    let day = argsArr[1];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour >= 10 && hour <= 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        default:
            console.log("closed");
            break;
    }
}
workingHours([11, "Monday"]);
workingHours([19, "Friday"]);
workingHours([11, "Sunday"]);