function library(input) {
    let book = input[0];

    let index = 1;
    let bookisFound = false;
    let nextBook = input[index]

    while (nextBook !== "No More Books") {
        if (nextBook == book) {
            bookisFound = true;
            console.log(`You checked ${index - 1} books and found it.`);
            break;
        }
        index++
        nextBook = input[index];
    }

    if (!bookisFound) {
        console.log(`The book you search is not here! \n You checked ${index - 1} books.`);
    }
}

library(["Troy",
    "Stronger",
    "Life Style",
    "Troy"
]);

library(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"
]);

library(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);

