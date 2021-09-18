function charityCampaign(input) {
    let days = Number(input[0]);
    let cookers = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);
    let priceCakes = cakes * 45;
    let priceWaffles = waffles * 5.80;
    let pricePancakes = pancakes * 3.20;
    let sumForTheDay = (priceCakes + pricePancakes + priceWaffles) * cookers;
    let sumCampaign = sumForTheDay * days;
    let finalSum = sumCampaign - (sumCampaign/8)

    console.log (finalSum);

}

charityCampaign([23, 8, 14, 30, 16]);