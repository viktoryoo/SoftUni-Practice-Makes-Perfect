function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let lenght = Number(input[1]);
    let time = Number(input[2]);

    let secondsSwimed = lenght * time;
    let secondsResisted = Math.floor(lenght / 15) * 12.5;
    let totalTime = (secondsSwimed + secondsResisted);
    let diff = totalTime - record;

    if (totalTime <= record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds. `);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower. `);
    }
}
worldSwimmingRecord(["10464", "1500", "20"]); 
worldSwimmingRecord(["55555.67", "3017", "5.03"]);

