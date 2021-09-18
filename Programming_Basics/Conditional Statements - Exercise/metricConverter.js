function metricConverter(input) {
    let [num, inputMetric, outputMetric] = input;
    let result = 0;

    if (inputMetric === "mm") {
        result = num / 1000;
    } else if (inputMetric === "cm") {
        result = num / 100;
    } else if (inputMetric === "m") {
        result = num;
    }

    if (outputMetric === "mm") {
        result = result * 1000;
    } else if (outputMetric === "cm") {
        result = result * 100
    } else if (outputMetric === "m") {
        result = result;
    }

    console.log(result.toFixed(3));
}
metricConverter([12, "mm", "m"]);
metricConverter([150, "m", "cm"]);
metricConverter([45, "cm", "mm"]);