function areaOfFigures(input){
    let area;
    if(input[0] == "square") {
        let a = Number(input[1]);
        let area = Math.pow(a, 2);
        console.log(area.toFixed(3));
    } else if (input[0] == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a*b
        console.log(area.toFixed(3));
    } else if (input[0] == "circle") {
        let r = Number(input[1]);
        let area = Math.PI*Math.pow(r, 2);
        console.log(area.toFixed(3));
    } else if (input[0] == "triangle") {
        let a = Number(input[1]);
        let ha = Number(input[2]);
        let area = (a*ha)/2;
        console.log(area.toFixed(3));
    }

}
areaOfFigures(["triangle", 4.5, 20]);