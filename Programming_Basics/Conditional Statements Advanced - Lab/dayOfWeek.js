function dayOfWeek(dayArr){
    let num = Number(dayArr[0]);

    switch (num){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}
dayOfWeek([1]);
dayOfWeek([2]);
dayOfWeek([5]);
dayOfWeek([6]);
dayOfWeek([7]);
dayOfWeek([12]);