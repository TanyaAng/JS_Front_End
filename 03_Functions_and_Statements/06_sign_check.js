function signCheck (...params) {
    let negativeNumbersCount=0;
    for (num of params) {
        if (num<0) {
            negativeNumbersCount++;
        }
    }
    if (negativeNumbersCount%2===0 || negativeNumbersCount ===0) {
        console.log('Positive')
    } else {
        console.log('Negative')
    }
}

signCheck(5,12,-15);