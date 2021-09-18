function processor(input) {
    let processors = Number(input[0]);
    let employes = Number(input[1]);
    let workingDays = Number(input[2]);

    let workingHours = employes * workingDays * 8;
    let developedProcessors = Math.floor(workingHours / 3);

    if (processors > developedProcessors) {
        console.log(`Losses: -> ${((processors - developedProcessors) * 110.10).toFixed(2)} BGN`);
    } else {
        console.log(`Profit: -> ${((developedProcessors - processors) * 110.10).toFixed(2)} BGN`);
    }

}

processor(["500", "8", "20"]);
processor(["150", "7", "18"]);