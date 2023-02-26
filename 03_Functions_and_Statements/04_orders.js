function orders (type, count) {
    let coffeePrice =1.5;
    let waterPrice = 1;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;

    switch (type) {
        case ('coffee') : totalPrice =count*coffeePrice; break;
        case ('water') : totalPrice =count*waterPrice; break;
        case ('coke') : totalPrice =count*cokePrice; break;
        case ('snacks') : totalPrice =count*snacksPrice; break;
    }

    console.log(`${totalPrice.toFixed(2)}`);
}