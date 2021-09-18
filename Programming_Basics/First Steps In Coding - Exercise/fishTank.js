function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percantage = Number(input[3]);
    let obem = lenght*width*height;
    let liters = obem*0.001;
    let procent = percantage*0.01;
    let total = liters*(1-procent);
    console.log(total);

}
fishTank([85, 75, 47, 17]);