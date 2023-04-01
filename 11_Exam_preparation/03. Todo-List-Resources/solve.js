function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  let addBtn = document.getElementById("add-button");
  let loadBtn = document.getElementById("load-button");
  addBtn.addEventListener("click", addItem);
  loadBtn.addEventListener("click", loadItems);

  let ul = document.getElementById("todo-list");

  function addItem(event) {
    if (event){
        event.preventDefault();
    }
    
    let item = document.getElementById("title");
    let itemValue = item.value;

    if (!itemValue) {
      alert("Please enter a title!");
      return;
    }

    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({
        name: itemValue,
      }),
    };

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        document.getElementById("title").value='';
        loadItems();
      })
      .catch((err) => console.log(err));
  }

  function loadItems(event) {
    if (event){
        event.preventDefault();
    }
    ul.innerHTML = '';
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        objects = Object.values(data);
        console.log(objects);
        for (let item of objects) {
          console.log(item);
          let li = createElement('li', '', item._id, '', '', ul);
          createElement('span', item.name, '', '', '', li);
          let removeBtn = createElement('button', 'Remove', '', '', '', li);
          let editBtn = createElement('button', 'Edit', '', '', '', li);
          removeBtn.addEventListener('click', deleteItem);
          editBtn.addEventListener('click', editItem);
        }
      })
      .catch((err) => console.log(err));
  }

  function editItem(event){
    if (event){
        event.preventDefault();
    }
    let button = event.target;
    const parent = button.parentElement;
    let id = parent.id;

    if (button.textContent === 'Edit'){
        let span = parent.querySelector('span');
        parent.removeChild(span);
        let spanContent = span.textContent;
        let input = document.createElement('input');
        input.value = spanContent;
        parent.prepend(input);

        button.textContent = 'Submit';
        return;
    }
    if (button.textContent==='Submit'){
        let input = parent.querySelector('input');
        let inputContent = input.value;
        fetch(`${BASE_URL}${id}`,{
            method:'PATCH',
            body: JSON.stringify({
                name: inputContent,
        })
        })
        .then(res=>res.json())
        .then(data=>{
            parent.removeChild(input);
            let span = document.createElement('span');
            span.textContent=inputContent;
            parent.prepend(span);
            button.textContent = 'Edit';

        })
        .catch(err=>console.log(err));
    }
    // console.log(spanContent);
  }

  function deleteItem(event){
    if (event){
        event.preventDefault();
    }
    const target = event.target;
    const parent = target.parentElement;
    let id = parent.id;
    console.log(id);
    fetch(`${BASE_URL}${id}`,{
        method: 'DELETE',
    })
        .then(res=>res.json())
        .then(()=>loadItems())
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
}

attachEvents();
