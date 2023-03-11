function addressBook (input){
    let books = {};
    for (const line of input){
        let [name,address] = line.split(':');
        books[name]=address;
        
    }
    let entries = Object.entries(books);
    let sortedByName = entries.sort( (personA, personB) => {
        let personAName = personA[0];
        let personBName = personB[0];
        return personAName.localeCompare(personBName);
    }) 

    for (const line of sortedByName){
        console.log(`${line[0]} -> ${line[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);