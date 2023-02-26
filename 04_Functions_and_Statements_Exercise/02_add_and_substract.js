function AddSubstractFunction (...numbers) {
    let totalSum=0;
    let thirdElement=numbers[2];
    for (num of numbers.slice(0,2)) {
        totalSum+=num;
    }


    let subtract = (x, y) => x-y;
    console.log(subtract(totalSum,thirdElement));
}

AddSubstractFunction(23,6,10);