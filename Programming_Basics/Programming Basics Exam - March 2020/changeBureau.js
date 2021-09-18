function bureau(input) {
    let bitcoin = Number(input[0]);
    let uan = Number(input[1]);
    let commission = Number(input[2]);

    let sumBitcoin = bitcoin * 1168; // BGN
    let sumUan = uan * 0.15; // USD
    let usdToBgn = sumUan * 1.76;

    let sum = (sumBitcoin + usdToBgn) / 1.95; // EUR
    let totalSum = sum - (sum * (commission / 100));

        console.log(`${totalSum.toFixed(2)}`);
}   

bureau([1, 5, 5]);