window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let title = document.getElementById('story-title');
  let story = document.getElementById('story');
  let genre = document.getElementById('genre');

  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publish);

  let storyObj = {};

  function publish(){
    
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let titleValue = title.value;
    let storyValue =story.value;
    let genreValue = genre.value;
    if (!firstNameValue){
      alert('Enter first name');
      return;
    }
    if(!lastNameValue){
      alert('Enter last name');
      return;
    }
    if(!ageValue){
      alert('Enter valid age');
      return;
    }
    if (!titleValue){
      alert('Enter title');
      return;
    }
    if(!storyValue){
      alert('Enter story content');
      return;
    }

    storyObj = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      age: ageValue,
      storyTitle: titleValue,
      genre: genreValue,
      story: storyValue 
    }

    const ulPreview = document.getElementById('preview-list');
    let li = createElement('li', '', '', ["story-info"], '', ulPreview);

    let article = createElement('article', '', '', '', '', li);

    createElement('h4', `Name: ${firstNameValue} ${lastNameValue}`, '', '', '', article);
    createElement('p',`Age: ${ageValue}`, '', '', '', article);
    createElement('p',`Title: ${titleValue}`, '', '', '', article);
    createElement('p',`Genre: ${genreValue}`, '', '', '', article);
    createElement('p',`Genre: ${storyValue}`, '', '', '', article);

    let saveBtn = createElement('button', "Save Story", '', ["save-btn"], '', li);
    let editBtn = createElement('button', "Edit Story", '', ["edit-btn"], '', li);
    let deleteBtn = createElement('button', "Delete Story", '', ["delete-btn"], '', li);

    saveBtn.addEventListener('click', saveStory);
    editBtn.addEventListener('click', editStory);
    deleteBtn.addEventListener('click', deleteStory);

    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value ='';
    document.getElementById('age').value= '';
    document.getElementById('story-title').value='';
    document.getElementById('story').value='';
    document.getElementById('genre').value = 'Disturbing';
    document.getElementById('form-btn').disabled = true;

  }

  function saveStory(event){
    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML='';
    let h1 =createElement('h1', "Your scary story is saved!", '', '', '', mainDiv);
    document.getElementById('form-btn').disabled = false;
  }

  function editStory(event){
    const target = event.target;
    const parentLi = target.parentNode;
    const parentUl = parentLi.parentNode;
    parentUl.removeChild(parentLi);

    document.getElementById('first-name').value =storyObj.firstName;
    document.getElementById('last-name').value =storyObj.lastName;
    document.getElementById('age').value= storyObj.age;
    document.getElementById('story-title').value=storyObj.storyTitle;
    document.getElementById('story').value=storyObj.story;
    document.getElementById('genre').value = storyObj.genre;
    document.getElementById('form-btn').disabled = false;
  }

  function deleteStory(event){
    const target = event.target;
    const parentLi = target.parentNode;
    const parentUl = parentLi.parentNode;
    parentUl.removeChild(parentLi);
    document.getElementById('form-btn').disabled = false;

  }

  // HELPER FUNCTION
  // type -> Str
  // content -> Str
  // id -> Str
  // class -> Array of Str
  // attributes -> Object

  function createElement(type, content,  id, classes, attributes, parentNode){
    const htmlElement = document.createElement(type);
    console.log(...classes);

    if (content && type !== 'input'){
      htmlElement.textContent = content;
    }

    if (content && type === 'input'){
      htmlElement.value = content;
    }

    if (id){
      htmlElement.id=id;
    }

    if (classes && classes.length>0) {
      htmlElement.classList.add(...classes);
    }

    if (attributes){
      for (const key in attributes){
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode){
      parentNode.appendChild(htmlElement);
    }
    
    return htmlElement;
  }
  
}
