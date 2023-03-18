function addItem() {
    let text = document.getElementById('newItemText').value;
    let value =document.getElementById('newItemValue').value;

    if (text!='' && value!=''){
        let selectItem = document.getElementById('menu');
        const newOption = document.createElement('option');
        newOption.textContent = text;
        newOption.value = value;
        selectItem.appendChild(newOption);
    }
    
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}