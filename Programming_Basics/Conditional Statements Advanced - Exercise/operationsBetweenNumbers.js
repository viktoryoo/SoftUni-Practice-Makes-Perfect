function operationsBetweenNumbers(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let operand = input[2];

    let result = 0;
    let evenOrOdd;
    switch (operand) {
        case "+":
            result = a + b;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${a} ${operand} ${b} = ${result} - ${evenOrOdd}`)
            break;
        case "-":
            result = a - b;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${a} ${operand} ${b} = ${result} - ${evenOrOdd}`)
            break;
        case "*":
            result = a * b;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${a} ${operand} ${b} = ${result} - ${evenOrOdd}`)
            break;
        case "/":
            if (b === 0) {
                console.log(`Cannot divide ${a} by zero `)
            } else {
                result = a / b;
                console.log(`${a} ${operand} ${b} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            if (b === 0) {
                console.log(`Cannot divide ${a} by zero `)
            } else {
                result = a % b;
                console.log(`${a} ${operand} ${b} = ${result}`);
            }
            break;
    }

}

operationsBetweenNumbers([10, 12, "+"]);
operationsBetweenNumbers([10, 1, "-"]);
operationsBetweenNumbers([7, 3, "*"]);
operationsBetweenNumbers([123, 12, "/"]);
operationsBetweenNumbers([10, 3, "%"]);
operationsBetweenNumbers([112, 0, "/"]);
operationsBetweenNumbers([10, 0, "%"]);
