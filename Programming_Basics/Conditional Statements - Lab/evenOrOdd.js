function evenOrOdd(input){
    let digit = Number(input[0]);
    if (digit % 2 == 0){
        console.log("even");
    } else {
        console.log("odd");
    }
}
evenOrOdd([3]);