function mountainRun(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSecOneMeter = Number(input[2]);

    let goalTimeInSec = distance * timeInSecOneMeter;

    let slowed = Math.floor((distance / 50) ) * 30; 

    let totalTime = goalTimeInSec + slowed;

    if (record > totalTime) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${Math.abs(record - totalTime).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["5554.36",
"1340",
"3.23"])

