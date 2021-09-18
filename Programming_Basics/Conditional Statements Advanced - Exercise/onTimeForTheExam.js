function onTimeForTheExam(input) {
    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExamInMin = hoursExam * 60 + minExam;
    let timeArriveInMin = hoursArrive * 60 + minArrive;

    if (timeArriveInMin > timeExamInMin) {
        console.log("Late");
        let diff = timeArriveInMin - timeExamInMin;
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }
    } else if (timeArriveInMin === timeExamInMin || timeExamInMin - timeArriveInMin <= 30) {
        console.log("On time");
        diff = timeExamInMin - timeArriveInMin;
        if (diff != 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log("Early");
        let diff = timeExamInMin - timeArriveInMin;
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    }
}

onTimeForTheExam(["11",
"30",
"12",
"29"])
