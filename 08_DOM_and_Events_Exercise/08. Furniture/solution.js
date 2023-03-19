function solve() {
  let buttons = Array.from(document.getElementsByTagName('button'));
  let textAres = Array.from(document.getElementsByTagName('textarea'));
  let tbody = document.querySelector('.table > tbody');
  
  let generateBtn = buttons[0];
  let buyBtn = buttons[1];

  let generateTextArea = textAres[0];
  let buyTextArea = textAres[1];

  generateBtn.addEventListener('click', generateHandler);
  buyBtn.addEventListener('click', buyHandler);

  function generateHandler(){
    const data = JSON.parse(generateTextArea.value);
    console.log(data);
    for (const {img, name, price, decFactor} of data){
      const tableRow = createElement(type = 'tr', content='', parentNode = tbody);

      const firstColId = createElement(type = 'td', content = '', parentNode = tableRow);
      createElement(type = 'img', content = '', parentNode = firstColId , id= '' ,classes =  '', attributes = {src: img});
     
      const secondColId = createElement(type = 'td', content = '', parentNode = tableRow);
      createElement(type = 'p', content = name, parentNode = secondColId);

      const thirdColId = createElement(type = 'td', content = '', parentNode = tableRow);
      createElement(type = 'p', content = price, parentNode = thirdColId , id= '' ,classes =  '', attributes = '');

      const forthColId = createElement(type = 'td', content = '', parentNode = tableRow); 
      createElement(type = 'p', content = decFactor, parentNode = forthColId);

      const fifthColId = createElement(type = 'td', content = '', parentNode = tableRow); 
      createElement(type = 'input', content = '', parentNode = fifthColId, id = '', classes = '', attributes={type: 'checkbox'});
    }
  } 

  function buyHandler(){
    let checked = Array.from(document.querySelectorAll('tbody tr input:checked'));
    let boughtItems = [];
    let totalPrice =0;
    let totalDecFactor = 0;
    for (const input of checked){
      const tableRow = input.parentElement.parentElement;
      const [firstCol, secondCol, thirdCol, forthCol] = Array.from(tableRow.children);
      let item = secondCol.children[0].textContent;
      boughtItems.push(item);

      let currentPrice = Number(thirdCol.children[0].textContent);
      totalPrice+=currentPrice;

      let currentDecFactor = Number(forthCol.children[0].textContent);
      totalDecFactor+=currentDecFactor;
    }

    buyTextArea.value+=`Bought furniture: ${boughtItems.join(', ')}\n`;
    buyTextArea.value+=`Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextArea.value+=`Average decoration factor: ${totalDecFactor/checked.length}`;
  }
    

  // HELPER FUNCTION
  // type -> Str
  // content -> Str
  // id -> Str
  // class -> Array of Str
  // attributes -> Object

  function createElement(type, content, parentNode, id, classes, attributes){
    const htmlElement = document.createElement(type);

    if (content && type !== 'input'){
      htmlElement.textContent = content;
    }

    if (content && type === 'input'){
      htmlElement.value = content;
    }

    if (id){
      htmlElement.id=id;
    }

    if (classes) {
      htmlElement.classesList.add(...classes);
    }

    if (parentNode){
      parentNode.appendChild(htmlElement);
    }
  
    if (attributes){
      for (const key in attributes){
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    
    return htmlElement;
  }

}