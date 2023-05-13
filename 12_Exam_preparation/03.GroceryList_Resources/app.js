function solve(){
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const inputDomElements = {
        product: document.getElementById('product'),
        count: document.getElementById('count'),
        price: document.getElementById('price')
    }

    let addBtn = document.getElementById('add-product');
    let updateBtn = document.getElementById('update-product');
    let loadBtn =document.getElementById('load-product');

    addBtn.addEventListener('click', addItemHandler);
    updateBtn.addEventListener('click', updateItemHandler);
    loadBtn.addEventListener('click', loadItemsHandler);

    const table = document.getElementById('tbody');

    let currentIdItem;

    function loadItemsHandler(event){
        table.innerHTML='';
        if (event){
            event.preventDefault();
        }
        fetch(BASE_URL)
        .then(res=>res.json())
        .then(data=>{
            objects = Object.values(data);
            for (let item of objects) {
                createTableRow(item);
            }
        })
        .catch(err=>console.log(err));

    }

    function addItemHandler(event){
        if (event){
            event.preventDefault();
        }
        let item = {
            product: inputDomElements.product.value,
            count: inputDomElements.count.value,
            price: inputDomElements.price.value
        }
        inputData = Object.values(inputDomElements);
        const isInvalidInput = inputData.some(el => el.value ==='');
        if (isInvalidInput){
            return;
        }
        const httpHeaders = {
            method: "POST",
            body: JSON.stringify(item),
          };

        fetch(BASE_URL, httpHeaders)
          .then(res=>res.json())
          .then(()=>{
            createTableRow(item);
            
            inputData.forEach(el => el.value='');
            loadItemsHandler();
          })
          .catch(err=>console.log(err));
    }

    function updateItemHandler(event){
        if (event){
            event.preventDefault();
        }
        let item = {
            product: inputDomElements.product.value,
            count: inputDomElements.count.value,
            price: inputDomElements.price.value
        }

        inputData = Object.values(inputDomElements);

        const isInvalidInput = inputData.some(el => el.value ==='');
        if (isInvalidInput){
            return;
        }
        const httpHeaders = {
            method: "PATCH",
            body: JSON.stringify(item),
          };

        fetch(`${BASE_URL}${currentIdItem}`, httpHeaders)
          .then(res=>res.json())
          .then(()=>{
            loadItemsHandler();
            addBtn.disabled = false;
            updateBtn.disabled = true;
          })
          .catch(err=>console.log(err));
    }


    function updateItem(event){
        const target = event.target;
        const parent = target.parentElement.parentElement;
        currentIdItem = parent.id;
        let product = parent.querySelector(`.name`);
        let count = parent.querySelector(`.count-product`);
        let price = parent.querySelector(`.product-price`);
        console.log('Update item')
        inputDomElements.product.value = product.textContent;
        inputDomElements.count.value = count.textContent;
        inputDomElements.price.value = price.textContent;
        addBtn.disabled = true;
        updateBtn.disabled = false;
    }

    function deleteItem(event){
        if (event){
            event.preventDefault();
        }
        const target = event.target;
        const parent = target.parentElement.parentElement;
        let id = parent.id;
        fetch(`${BASE_URL}${id}`,{
            method: 'DELETE',
        })
            .then(res=>res.json())
            .then(()=>loadItemsHandler())
            .catch(err=> console.log(err));
    }

    function createElement(type, content, id, classes, attributes, parentNode) {
        const htmlElement = document.createElement(type);
        console.log(...classes);
    
        if (content && type !== "input") {
          htmlElement.textContent = content;
        }
    
        if (content && type === "input") {
          htmlElement.value = content;
        }
    
        if (id) {
          htmlElement.id = id;
        }
    
        if (classes) {
          htmlElement.classList.add(...classes);
        }
    
        if (attributes) {
          for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]);
          }
        }
    
        if (parentNode) {
          parentNode.appendChild(htmlElement);
        }
    
        return htmlElement;
      }

    function createTableRow(item){
        let tr = createElement('tr', '', item._id, '', '', table);
        createElement('td', item.product, '', ['name'], '', tr);
        createElement('td', item.count, '', ['count-product'], '', tr);
        createElement('td', item.price, '', ['product-price'], '', tr);
        let btnContainer = createElement('td', '', '', ['btn'], '', tr);
        const smallUpdateBtn = createElement('button','Update','',['update'],'',btnContainer);
        const smallDeleteBtn =createElement('button','Delete','',['delete'],'',btnContainer);
        
        smallUpdateBtn.addEventListener('click', updateItem);
        smallDeleteBtn.addEventListener('click', deleteItem);

    }
}

solve();