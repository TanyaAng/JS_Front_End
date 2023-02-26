function gradeFormat (grade) {
    let state ='';
    switch (true) {
        case (grade<3.00): state='Fail'; grade=2; break;
        case (grade>=3.00 && grade < 3.50): state='Poor'; break;
        case (grade>=3.50 && grade < 4.50): state='Good'; break;
        case (grade>=4.50 && grade < 5.50): state='Very good'; break;
        case (grade>=5.50): state='Excellent'; break;
    }
    
    if (grade == 2) {
        console.log(`${state} (${grade})`)
        return;
    }

    console.log(`${state} (${grade.toFixed(2)})`)
}

gradeFormat(2.99);