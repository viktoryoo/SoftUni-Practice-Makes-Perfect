function toyShop(input){
    let tripPrize = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlePrize = 2.60;
    let dollPrize = 3;
    let bearPrize = 4.10;
    let minionPrize = 8.20;
    let truckPrize = 2;

    let toysCount = puzzles + dolls + bears + minions + trucks;

    let totalSum = puzzles*puzzlePrize + dolls*dollPrize + bears*bearPrize + minions*minionPrize + trucks*truckPrize;

    if(toysCount >= 50) {
        totalSum = totalSum - (totalSum * 0.25);
    }
    totalSum = totalSum - (totalSum * 0.1);

    if (totalSum >= tripPrize){
        console.log(`Yes! ${(totalSum-tripPrize).toFixed(2)} lv left. ` )
    } else {
        console.log(`Not enough money! ${(tripPrize-totalSum).toFixed(2)} lv needed.`)
    }
}
toyShop([40.8, 20, 25, 30, 50, 10]);
toyShop([320, 8, 2, 5, 5, 1]);