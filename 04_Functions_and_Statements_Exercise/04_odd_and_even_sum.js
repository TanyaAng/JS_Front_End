function oddEvenSum (number) {
    let numberAsString = number.toString();
    let oddSum=0;
    let evenSum=0;
    for (num of numberAsString) {
        let number = Number (num);
        if (number%2 === 0) {
            evenSum+=number;
        } else {
            oddSum+=number;
        }
    }
    console.log (`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(123456);