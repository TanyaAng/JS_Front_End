window.addEventListener('load', solve);

function solve() {
    let inputDOMElements = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee')
    }

    console.log(inputDOMElements);

    const createBtn = document.getElementById('create-task-btn');
    const deleteBtn = document.getElementById('delete-task-btn');

    createBtn.addEventListener('click', addTaskHandler);
    deleteBtn.addEventListener('click', deleteTaskHandler);

    let taskCtn = document.getElementById('tasks-section');
    console.log(taskCtn);
    let pointsCtn = document.getElementById('total-sprint-points');

    let totalPoints=0;
    let currentId=1;

    let allTasks=[];
    let currentTask;

    function addTaskHandler(){
        inputData = Object.values(inputDOMElements);
        const isInvalidInput = inputData.some(el => el.value ==='');
        if (isInvalidInput){
            return;
        }

        let task={
            id: currentId,
            title: inputDOMElements.title.value,
            description: inputDOMElements.description.value,
            label: inputDOMElements.label.value,
            points: inputDOMElements.points.value,
            assignee: inputDOMElements.assignee.value
        }
        inputData.forEach(el => el.value='');
        inputDOMElements.label.value = 'Feature';

        allTasks.push(task);
        totalPoints+=Number(task.points);

        let task_label_subclass='';
        let task_label_icon='';

        if (task.label==='Feature'){
            task_label_subclass = 'feature';
            // task_label_icon="&#8865;";
            task_label_icon="⊡";
        }
        else if (task.label==='Low Priority Bug'){
            task_label_subclass = 'low-priority';
            // task_label_icon="&#9737;";
            task_label_icon="☉";
        }
        else if (task.label==='High Priority Bug'){
            task_label_subclass = 'high-priority';
            // task_label_icon="&#9888;";
            task_label_icon="⚠";
        }

        let article = createElement('article', '', `task-${task.id}`, ['task-card'],'', taskCtn);
        createElement('div', `${task.label} ${task_label_icon}`, '',['task-card-label', `${task_label_subclass}`], '', article);
        createElement('h3', task.title, '', ['task-card-title'], '', article);
        createElement('p', task.description,'',['task-card-description'], '',article);
        createElement('div',`Estimated at ${task.points} pts`, '', ['task-card-points'], '', article);
        createElement('div', `Assigned to: ${task.assignee}`,'',['task-card-assignee'], '', article);
        let btnCtn = createElement('div', '','', ['task-card-actions'],'',article);
        let deleteBtn = createElement('button', 'Delete', '','','',btnCtn);

        deleteBtn.addEventListener('click', addTaskTodeleteHandler);

        pointsCtn.textContent=`Total Points ${totalPoints}pts`;

        currentId+=1;
    }

    function addTaskTodeleteHandler(){
        let article = this.parentElement.parentElement;
        const id = article.id.split('-')[1];

        for (let obj of allTasks){
            if (obj.id===Number(id)){
                currentTask=obj;
                break;
            }
        }
        inputDOMElements.title.value = currentTask.title;
        inputDOMElements.description.value=currentTask.description;
        inputDOMElements.label.value = currentTask.label;
        inputDOMElements.points.value=currentTask.points;
        inputDOMElements.assignee.value=currentTask.assignee;

        inputData = Object.values(inputDOMElements);
        inputData.forEach(el => el.disabled=true);

        createBtn.disabled=true;
        deleteBtn.disabled = false;
    }

    function deleteTaskHandler(){
        let articleId = `task-${currentTask.id}`;
        const article = document.getElementById(articleId);
        article.remove();

        totalPoints-=currentTask.points;
        pointsCtn.textContent=`Total Points ${totalPoints}pts`;

        inputData = Object.values(inputDOMElements);
        inputData.forEach(el => el.value='');
        inputData.forEach(el => el.disabled=false);
        inputDOMElements.label.value = 'Feature';

        currentTask='';
        createBtn.disabled=false;
        deleteBtn.disabled = true;
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