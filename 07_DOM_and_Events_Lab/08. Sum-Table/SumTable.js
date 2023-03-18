function sumTable() {
    let prices = document.querySelectorAll('table tr:not(:first-child):not(:last-child) > td:nth-child(2n)');
    console.log(prices);
    let totalSum=0;
    for (let price of Array.from(prices)){
        totalSum+=Number(price.textContent);
    }

    let result = document.getElementById('sum');
    result.textContent = totalSum;

}