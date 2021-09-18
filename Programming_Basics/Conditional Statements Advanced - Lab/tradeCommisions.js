function tradeCommisions(argArr) {
    let town = argArr[0];
    let sales = Number(argArr[1]);

    let calculatedCommisions = 0;

    isError = false;

    if (sales <= 0) {
        console.log("error");
    } else {
        switch (town) {
            case "Sofia":
                if (sales <= 500) {
                    calculatedCommisions = 0.05 * sales;
                } else if (sales <= 1000) {
                    calculatedCommisions = 0.07 * sales;
                } else if (sales <= 10000) {
                    calculatedCommisions = 0.08 * sales;
                } else {
                    calculatedCommisions = 0.12 * sales;
                }
                break;
            case "Varna":
                if (sales <= 500) {
                    calculatedCommisions = 0.045 * sales;
                } else if (sales <= 1000) {
                    calculatedCommisions = 0.075 * sales;
                } else if (sales <= 10000) {
                    calculatedCommisions = 0.1 * sales;
                } else {
                    calculatedCommisions = 0.13 * sales;
                }
                break;
            case "Plovdiv":
                if (sales <= 500) {
                    calculatedCommisions = 0.055 * sales;
                } else if (sales <= 1000) {
                    calculatedCommisions = 0.08 * sales;
                } else if (sales <= 10000) {
                    calculatedCommisions = 0.12 * sales;
                } else {
                    calculatedCommisions = 0.145 * sales;
                }
                break;
            default:
                isError = true;
                break;
        }
        if (isError) {
            console.log("error");
        } else {
            console.log(calculatedCommisions.toFixed(2));
        }
    
    }

    

}

tradeCommisions(["Sofia", 1500]);
tradeCommisions(["Kaspichan", -50]);