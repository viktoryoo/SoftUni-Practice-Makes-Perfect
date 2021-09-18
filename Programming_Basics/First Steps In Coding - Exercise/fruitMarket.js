function fruitMarket(input){
    let priceStrawberries = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberries = Number(input[3]);
    let strawberries = Number(input[4]);
    let priceRaspberries = priceStrawberries/2;
    let priceOranges = priceRaspberries - (priceRaspberries*0.4);
    let priceBananas = priceRaspberries - (priceRaspberries*0.8);
    let totalSum = (priceStrawberries*strawberries) + (priceBananas*bananas) + (priceOranges*oranges) + (priceRaspberries*raspberries);
    console.log(totalSum.toFixed(2));
}
fruitMarket([48, 10, 3.3, 6.5, 1.7]);