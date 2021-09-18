function hotelRoom (input) {
        let month = input[0];
        let daysCheckedIn = Number(input[1]);
    
        let studio = 0;
        let apartment = 0;
        let sumForApartment = 0;
        let sumForStudio = 0;
    
        switch (month) {
            case "May":
            case "October":
                studio = 50 * daysCheckedIn;
                apartment = 65 * daysCheckedIn;
                if (daysCheckedIn > 14) {
                    studio = 50 * (daysCheckedIn * 0.7);
                    apartment = 65 * (daysCheckedIn * 0.9);
                } else if (daysCheckedIn > 7) {
                    studio = 50 * (daysCheckedIn * 0.95);
                    apartment = 65 * daysCheckedIn;
                }
                break;
            case "June":
            case "September":
                studio = 75.20 * daysCheckedIn;
                apartment = 68.70 * daysCheckedIn;
                if (daysCheckedIn > 14) {
                    studio = 75.20 * (daysCheckedIn * 0.8);
                    apartment = 68.70 * (daysCheckedIn * 0.8);
                }
                break;
            case "July":
            case "August":
                studio = 76 * daysCheckedIn;
                apartment = 77 * daysCheckedIn;
                if (daysCheckedIn > 14) {
                    studio = 76 * daysCheckedIn;
                    apartment = 77 * (daysCheckedIn * 0.9);
                }
                break;
        }
        console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
        console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

hotelRoom(["May", 15]);
hotelRoom(["June", 14]);
hotelRoom(["August", 20]);