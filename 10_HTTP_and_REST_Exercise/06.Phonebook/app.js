function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';
    const DELETE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    const phonebook = document.getElementById('phonebook');

    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    
    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', createContact);

    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', loadContact);

    async function loadContact(){
        try{
            const phonebookRes = await fetch(BASE_URL);
            let phonebookData = await phonebookRes.json();
            phonebookData = Object.values(phonebookData);
            phonebook.innerHTML ='';
            for (const {phone, person, _id} of phonebookData){
                let personPhoneLi = document.createElement('li');
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.id = _id;
              
                deleteBtn.addEventListener('click', deletePhone);
                personPhoneLi.textContent = `${person}: ${phone}`;

                personPhoneLi.appendChild(deleteBtn);
                phonebook.appendChild(personPhoneLi);

            }

        } catch (err){
            console.log(err);
        }
    }

    async function deletePhone(){
        const key = this.id;
        fetch(`${DELETE_URL}${key}`,{
            method: 'DELETE'
        })
            .then((res)=>res.json())
            .then(loadContact)
            .catch(err=> console.log(err));
    }

    function createContact(){
        let personValue = person.value;
        let phoneValue = phone.value;

        let message ={
            person: personValue,
            phone: phoneValue
        }

        fetch(BASE_URL, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message),
        })
        .then((res)=> res.json())
        .then(()=> {
            loadContact;
            personValue = '';
            phoneValue = '';
            
        })
        .catch((err)=> console.log(err));

    }

}

attachEvents();