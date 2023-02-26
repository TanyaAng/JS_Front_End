function checkPalindrome (arr) {
    for (num of arr) {
        let numAsString = num.toString();
        let numAsArr = numAsString.split("");
        let reversedNum = numAsArr.reverse().join("");
        if (numAsString === reversedNum) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}


checkPalindrome ([123,323,421,121]);