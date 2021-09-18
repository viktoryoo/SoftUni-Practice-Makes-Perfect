function graduation(input) {
    let name = input[0];
    let year = 1;
    let grades = 0;
    let sum = 0
    let excluded = 0;

    while (year <= 12) {
        let currentGrade = Number(input[year]);
        year++;
        if (currentGrade >= 4) {
            grades++
            sum += currentGrade;
        } else {
            excluded++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grades + 1} grade`);
                break;
            }
        }
    }
    if(grades == 12) {
        console.log(`${name} graduated. Average grade: ${(sum/grades).toFixed(2)}`);
    }
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
]);
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
