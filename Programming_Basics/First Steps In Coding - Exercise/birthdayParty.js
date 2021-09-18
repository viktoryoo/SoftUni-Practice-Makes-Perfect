function birthdayParty(input) {
    let rent = Number(input[0]);
    let cake = rent * 0.2;
    let drinks = cake * 0.55;
    let animator = rent/3;
    let budget = rent + cake + drinks + animator;
    console.log(budget);
}
birthdayParty([2250]);