function school(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litterChemical = Number(input[2]);
    let discount = Number(input[3]);

    let pricePens = pens * 5.80;
    let priceMarkers = markers * 7.20;
    let priceChemial = litterChemical * 1.20;

    let sum = (pricePens + priceMarkers + priceChemial);

    let totalSum = sum - (sum * (discount / 100));

    console.log(totalSum.toFixed(3));
}

school(["2",
"3",
"2.5",
"25"]);