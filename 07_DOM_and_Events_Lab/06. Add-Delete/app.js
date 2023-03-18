function addItem() {
    let input = document.getElementById('newItemText');

    let items = document.getElementById('items');
    
    let li = document.createElement("li");
    li.textContent = input.value;   
    let href = document.createElement('a');
    href.setAttribute('href', '#');
    href.textContent = '[Delete]';
    
    li.appendChild(href);
    items.appendChild(li);

    input.value = '';

    href.addEventListener('click', deleteHandler);

    
    function deleteHandler(event){
        let liItem = event.currentTarget.parentElement;
        liItem.remove();
    }
}