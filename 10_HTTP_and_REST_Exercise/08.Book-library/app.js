function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

  const tbody = document.querySelector('table>tbody');
  
  const formHeader = document.querySelector('#form > h3');

  const loadBooksBtn = document.getElementById('loadBooks');
  const subminBtn = document.querySelector('#form>button');
  
  const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form>input'))
  let editBookID = null;

  loadBooksBtn.addEventListener('click', loadBookHandler);
  subminBtn.addEventListener('click', submitBookHandler);

  function loadBookHandler(){
    tbody.innerHTML='';

    fetch(BASE_URL)
      .then((res)=>res.json())
      .then(data=>{
        for(const id in data){
          const tr = document.createElement('tr');

          const titleTd = document.createElement('td');
          titleTd.textContent=data[id].title;
          tr.appendChild(titleTd);

          const authorTd = document.createElement('td');
          authorTd.textContent = data[id].author;
          tr.appendChild(authorTd);

          const buttonsTd = document.createElement('td');
          buttonsTd.id = id;

          const editBtn = document.createElement('button');
          editBtn.textContent = 'Edit';
          editBtn.addEventListener('click', editEntity);
          buttonsTd.appendChild(editBtn);

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.addEventListener('click', deleteEntity);
          buttonsTd.appendChild(deleteBtn);

          tr.appendChild(buttonsTd);
          tbody.appendChild(tr);
        }

      })
      .catch(err=>console.log(err))
  }

  function submitBookHandler(){
    let titleInputValue = titleInput.value;
    let authorInputValue = authorInput.value;
    let url=BASE_URL;

    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({
        author: authorInputValue,
        title: titleInputValue
      })
    }

    if (!titleInputValue){
      alert('Please provide a title name.');
      return;
    }
    if (!authorInputValue){
      alert('Please provide an author name.');
      return;
    }

    if (subminBtn.textContent === 'Save'){
      httpHeaders.method = 'PUT';
      url=`${BASE_URL}${editBookID}`
    }

    fetch(url, httpHeaders)
    .then((res)=>res.json)
    .then(()=>{
      
      loadBookHandler();
      console.log(formHeader.textContent);
      if (formHeader.textContent ==='Edit FORM'){
        formHeader.textContent='FORM';
        subminBtn.textContent='Submit';
      }
      else{
        formHeader.textContent='Edit FORM';
        subminBtn.textContent='Save';
      }
      titleInput.value='';
      authorInput.value='';
      
    })
    .catch(err=>console.log(err));
    
  }

  function editEntity(event){
    const target = event.target;
    const parent = target.parentElement;
    editBookID = parent.id;
    const trParent = parent.parentElement;
    const tdS = Array.from(trParent.getElementsByTagName('td'));
    formHeader.textContent='Edit FORM';
    subminBtn.textContent='Save';
    titleInput.value = tdS[0].textContent;
    authorInput.value = tdS[1].textContent;
  }

  function deleteEntity(event){
    const target = event.target;
    const parent = target.parentElement;
    const id = parent.id;
    fetch(`${BASE_URL}${id}`,{
      method: 'DELETE',
      })

      .then(res=>res.json())
      .then(()=>loadBookHandler())
      .catch(err=>console.log(err));
  }
}

attachEvents();