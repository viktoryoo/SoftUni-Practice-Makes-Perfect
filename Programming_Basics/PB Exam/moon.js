function moon(input){
    let avgSpeed = Number(input[0]);
    let fuel = Number(input[1]);

    let totalDistance = 384400 * 2;
    let timeTraveled = Math.ceil(totalDistance / avgSpeed);
    console.log(timeTraveled + 3);
    console.log((fuel * totalDistance) / 100);
}

moon(["15000",
"4"]);