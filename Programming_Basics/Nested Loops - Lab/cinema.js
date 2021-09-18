function cinema(input) {
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    let totalTickets = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Finish" || input[i] === "End") {
            break;
        }

        let movieTitle = input[i];
        i++

        let freeSeats = Number(input[i]);
        i++

        let currentMovieTickets = 0;

        while (input[i] != "Finish" && input[i] != "End"){
            totalTickets++;
            currentMovieTickets++;
            switch(input[i]) {
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidsTickets++;
                    break;
            }
            if(currentMovieTickets === freeSeats) {
                break;
            }
            i++;
        }
        console.log(`${movieTitle} - ${((currentMovieTickets/freeSeats) * 100 ).toFixed(2)}% full.`);
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets/ totalTickets) * 100 ).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets/ totalTickets) * 100 ).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets/ totalTickets) * 100 ).toFixed(2)}% kids tickets.`);
}


cinema(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);