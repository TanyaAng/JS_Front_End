function loadingBar (n) {
    let loadings = n/10;
    let result = '';
    if (loadings<10) {
        let percentResult = '%'.repeat(loadings);
        let leftovers = '.'.repeat(10-loadings);
        result=percentResult+leftovers;
        console.log(`${n}% [${result}]`);
        console.log('Still loading...')
        }
    else {
        result='%'.repeat(10);
        console.log('100% Complete!');
        console.log(`[${result}]`);
    }
}

loadingBar(100);