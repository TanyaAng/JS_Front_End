function solve (input){
    let parkingLot = [];
    for (let i  = 0; i < input.length; i++){
        let [direction,carNumber] = input[i].split(', ');
        if (direction ==='IN' && !parkingLot.includes(carNumber)){
            parkingLot.push(carNumber);
        };
        if (direction   === 'OUT' && parkingLot.includes(carNumber)){
            let index = parkingLot.indexOf(carNumber);
            parkingLot.splice(index,1);
        };
    };
    if (parkingLot.length>0){
        sortedParking = parkingLot.sort();
        console.log(sortedParking.join('\n'));
    }
    else {
        console.log('Parking Lot is Empty');
    };
    
};


solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);