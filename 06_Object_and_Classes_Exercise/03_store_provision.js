function storeProvision (firstArr, secondArr){
    let combined = [...firstArr,...secondArr];
    let products = {};
    for (let i = 0; i < combined.length-1; i+=2){
        
        let product = combined[i];
        let quantity = Number(combined[i+1]);
        if (!products.hasOwnProperty(product)) {
            products[product] = quantity;
        }
        else{
            products[product] += quantity;
        };
        
    };
    for (let product in products){
        console.log(`${product} -> ${products[product]}`);
    }
};

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );