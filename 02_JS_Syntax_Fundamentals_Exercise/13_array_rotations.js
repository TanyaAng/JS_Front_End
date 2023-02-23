function arrRotation (arr, n){
    let rotations = n%arr.length;
    for (let i=0; i<rotations; i++){
        firstNum = arr.shift();
        arr.push(firstNum);
    }
    console.log(arr.join(' '));
}

arrRotation([2, 4, 15, 31], 5);