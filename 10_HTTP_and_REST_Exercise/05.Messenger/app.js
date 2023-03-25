function attachEvents() {
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', sendMessage);
    refreshBtn.addEventListener('click', viewAllMessage);    
    const textArea = document.getElementById('messages');

    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';

    function sendMessage(event){ 
        const inputs = Array.from(document.getElementsByTagName('input'));
        let authorName = inputs[0].value;
        let messageText = inputs[1].value;
        let message={
            author: authorName,
            content: messageText,
        }
        console.log(message)
        fetch(BASE_URL, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message),
        })
        .then((res)=> res.json())
        .then((data)=> {
            authorName = '';
            messageText = '';
            
        })
        .catch((err)=> console.log(err));
    }
        
    function viewAllMessage(event){
        let textareaContent = '';
        fetch(BASE_URL)
            .then((res)=>res.json())
            .then((data)=> {
                console.log(data);
                for (const id in data){
                    const currentMessage = data[id];
                    textareaContent+=`${currentMessage.author}: ${currentMessage.content}\n`;
                }
                textArea.value = textareaContent.trim();
            })
            .catch((err)=> console.log(err));

    }
}

attachEvents();