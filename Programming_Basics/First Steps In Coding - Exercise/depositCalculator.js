function depositCalculator(input) {
    let deposit = Number(input[0]);
    let srok = Number(input[1]);
    let lihva = Number(input[2]);
    let suma = deposit + srok * ((deposit * (lihva * 0.01) /12));
    console.log(suma);
}
depositCalculator(["200", "3", "5.7"]);