function storeProvision (firstArr, secondArr){
    let products = {};
    for (let i = 0; i < firstArr.length-1; i+=2){
        let product = firstArr[i];
        let quantity = Number(firstArr[i+1]);
        if (!products.hasOwnProperty(product)) {
            products[product] = quantity;
        }
        else{
            products[product] += quantity;
        };
        
    };

    for (let i = 0; i < secondArr.length-1; i+=2){
        let product = secondArr[i];
        let quantity = Number(secondArr[i+1]);
        if (!products.hasOwnProperty(product)) {
            products[product] = quantity;
        }
        else{
            products[product] += quantity;
        };
    }
    let productsTuple = Object.entries(products);
    for (let [key,value] of productsTuple){
        console.log(`${key} -> ${value}`);
    }
};

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );