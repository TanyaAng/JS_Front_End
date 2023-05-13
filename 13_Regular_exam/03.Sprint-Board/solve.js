// TODO:
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    let inputDOMElements = {
        title: document.getElementById('title'),
        description : document.getElementById('description')
    }

    const loadBtn = document.getElementById('load-board-btn');
    const addTaskBtn = document.getElementById('create-task-btn');

    loadBtn.addEventListener('click', loadTasksHandler);
    addTaskBtn.addEventListener('click', addTaskHandler);

    const toDoCtn = document.querySelector('#todo-section .task-list');
    const inProgressCtn = document.querySelector('#in-progress-section .task-list');
    const codeReviewCtn = document.querySelector('#code-review-section .task-list');
    const doneCtn = document.querySelector('#done-section .task-list');


    function loadTasksHandler(){
        toDoCtn.innerHTML = '';
        inProgressCtn.innerHTML ='';
        codeReviewCtn.innerHTML ='';
        doneCtn.innerHTML = '';

        fetch(BASE_URL)
        .then(res=>res.json())
        .then(data=>{
            objects = Object.values(data);
            for (let task of objects){
                createLiItem(task);
            }
        })
        .catch(err=>console.log(err));
    }

    function moveToProgressHandler(event){
        let target = event.currentTarget;
        let liParent = target.parentElement;
        const id = liParent.id;

        let task = {
            status: 'In Progress'
        }
        patchHandler(id, task);
    }

    function moveToReviewHandler(event){
        let target = event.currentTarget;
        let liParent = target.parentElement;
        const id = liParent.id;

        let task = {
            status: 'Code Review'
        }
        patchHandler(id, task);
    }
    function moveToDoneHandler(event){
        let target = event.currentTarget;
        let liParent = target.parentElement;
        const id = liParent.id;

        let task = {
            status: 'Done'
        }
        patchHandler(id, task);

    }

    function patchHandler(id,task){
        const httpHeaders = {
            method: "PATCH",
            body: JSON.stringify(task),
          };

        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(res=>res.json())
        .then(()=>loadTasksHandler())
        .catch(err=>console.log(err));

    }
    function closeTaskHandler(event){
        let target = event.currentTarget;
        let liParent = target.parentElement;
        console.log(liParent);

        const id = liParent.id;
        fetch(`${BASE_URL}${id}`,{
            method: 'DELETE',
        })
            .then(res=>res.json())
            .then(()=>loadTasksHandler())
            .catch(err=> console.log(err));
    }

    function addTaskHandler(event){

        let task = {
            title: inputDOMElements.title.value,
            description: inputDOMElements.description.value,
            status: 'ToDo'
        }
        inputData = Object.values(inputDOMElements);
        const isInvalidInput = inputData.some(el => el.value ==='');
        if (isInvalidInput){
            return;
        }
        inputData.forEach(el => el.value='');
        const httpHeaders = {
            method: "POST",
            body: JSON.stringify(task),
          };

        fetch(BASE_URL, httpHeaders)
        .then(res=> res.json())
        .then(()=>{
            createLiItem(task);
            loadTasksHandler();
        })
        .catch(err=>console.log(err));
    }

    function createLiItem(task){
        let parent;
        let buttonContext='';
        let eventHandler;
        if (task.status==='ToDo'){
            parent=toDoCtn;
            buttonContext='Move to In Progress';
            eventHandler = moveToProgressHandler;
        }
        else if (task.status==='In Progress'){
            parent=inProgressCtn;
            buttonContext='Move to Code Review';
            eventHandler = moveToReviewHandler
        }
        else if (task.status==='Code Review'){
            parent=codeReviewCtn;
            buttonContext='Move to Done';
            eventHandler = moveToDoneHandler;
        } 
        else if (task.status === 'Done') {
            parent=doneCtn;
            buttonContext='Close';
            eventHandler = closeTaskHandler;
        }

        let liItem = createElement('li','',task._id,['task'], '',parent);
        createElement('h3',task.title,'','','',liItem);
        createElement('p',task.description,'','','',liItem);
        let button = createElement('button', buttonContext,'','','',liItem);
        button.addEventListener('click', eventHandler);
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