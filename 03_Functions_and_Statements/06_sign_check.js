function signCheck (n1,n2,n3) {
    let negativeNumbersCount=0;
    let arrNumber = [n1,n2,n3];
    for (num of arrNumber) {
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