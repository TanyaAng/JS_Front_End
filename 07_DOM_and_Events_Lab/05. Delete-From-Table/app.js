function deleteByEmail() {
    let input = document.querySelector('input').value;
    let emailsColumn = Array.from(document.querySelectorAll('#customers tr td:nth-child(2)'));
    let resultMessage = document.getElementById('result');
    for (let td of emailsColumn){
        if (td.textContent == input){
            let trToDelete  = td.parentNode;
            let tbody = trToDelete.parentNode;
            tbody.removeChild(trToDelete);
            
            resultMessage.textContent = 'Deleted.';
            return;
        }
    }
    resultMessage.textContent = 'Not found.';
}