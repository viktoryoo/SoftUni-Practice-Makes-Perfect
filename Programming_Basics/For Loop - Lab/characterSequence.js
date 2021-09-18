function characterSequence (strArr) {
    let text = strArr[0];

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        console.log(letter);
    }
}

characterSequence(["Hello"]);