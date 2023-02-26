function factorialDivision (x, y) {
    let factorialX = factorial(x);
    let factorialY = factorial(y);
    let result = factorialX/factorialY;
    console.log(result.toFixed(2));
    function factorial (n) {
        if (n===0) {
            return 1;
        }
        return n*factorial(n-1);
    }
}

factorialDivision(5,2);