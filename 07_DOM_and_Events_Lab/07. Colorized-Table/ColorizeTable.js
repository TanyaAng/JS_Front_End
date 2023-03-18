function colorize() {
    let evenRows = Array.from(document.querySelectorAll('table tr:nth-child(2n)'));
    for (let row of evenRows){
        let tdElements = Array.from(row.children);
        for (let td of tdElements){
            td.style.backgroundColor = 'teal';
        }
    }    
}