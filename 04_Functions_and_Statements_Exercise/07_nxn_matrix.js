function printMatrix (n) {
    for (let row=0; row<n; row++) {
        let current_arr=[];
        for (let col=0; col<n; col++) {
            current_arr.push(n);
        }
        console.log(current_arr.join(" "));
    }
}

printMatrix(12);