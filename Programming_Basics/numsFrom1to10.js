function numsFrom1To10() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);

}

function greetingByName(input) {
    let name = input[0];
    let result = "Hello," + name;
    console.log(result);
}

function printName(input) {
    let firstName = input[0];
    let lastName = input [1];
    let age = Number(input[2]);
    let city = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age} years old person from ${city}`);
}

function inchesToCentimeters(input){
    let inches = Number(input[0]);
    let centimeters = inches*2.54;
    console.log(centimeters);
}

function projectsCreation(input){
    let name = input[0];
    let numberOfProjects = input[1];
    let hoursOfProjects = numberOfProjects*3;
    console.log(`The architect ${name} will need ${hoursOfProjects} hours to complete ${numberOfProjects} project/s.`);

}

function petShop(input){
    let numberOfDogs = Number(input[0]);
    let numberOfOtherDogs = Number(input[1]);
    let totalSum = (numberOfDogs*2.5) + (numberOfOtherDogs*4);
    console.log(`${totalSum} lv.`);

}

function yardGreening(input){
    let meters = Number(input[0]);
    let priceForGreening = meters*7.61;
    let discount = priceForGreening*0.18;
    let finalprice = priceForGreening - discount;
    console.log(`The final price is: ${finalprice} lv. \n The discount is: ${discount} lv.`);

}

yardGreening([550]);