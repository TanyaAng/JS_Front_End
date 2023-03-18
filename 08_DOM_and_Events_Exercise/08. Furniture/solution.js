function solve() {
  let buttons = document.getElementsByTagName('button');
  let textares = document.getElementsByTagName('textarea');
  

  let generate = buttons[0];
  let generateText = textares[0];

  let buy = buttons[1];
  let buyText = textares[1];

  generate.addEventListener('click', generator);
  buy.addEventListener('click', buyer);

  function generator(event){
    let tableBody = document.getElementsByTagName('tbody');
    console.log(tableBody);
    let input = generateText.value;
    const arr = JSON.parse(input);
    
    for (let obj of arr){
      
      let newRow = document.createElement('tr');
      for (let prop in obj){
        let newCell = document.createElement('td');
        newCell.textContent = obj[prop];
        newRow.appendChild(newCell);
      }
      tableBody.appendChild(newRow);
    }

    console.log(tableBody);
  }

  function buyer(event){

  }
}