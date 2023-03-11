function phonebookParser (input){
    let phonebook = {};
    for (const line of input){
        let [name,phoneNumber] = line.split(' ');
        if (!phonebook.hasOwnProperty(name)){
            phonebook[name] = phoneNumber;
        }
        
    }
    for (const key in phonebook){
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

phonebookParser(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']

)