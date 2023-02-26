function calculator (x,y,operator) {
    let result;
    switch (operator) {
        case ('multiply') : result=x*y; break;
        case ('divide') : 
         if (y!==0) {
            result=x/y;
             break;
            }else {
                result=0;
            }
        case ('add') : result=x+y; break;
        case ('subtract') : result=x-y; break;
    }
    console.log(result);
}