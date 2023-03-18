function solve() {
  let text = document.getElementById('input').value;
  let outputDiv = document.getElementById('output');
  
  let arrText = text.split('.');
  let filterText = arrText.filter(str => str!='').map(str => str+'.');
  document.getElementById('input').value='';

  

  if (filterText.length<=3){
    let paragraph = document.createElement('p');
    let textContent = '';
    for (let line of filterText){
      textContent+=line;
    }
    paragraph.textContent = textContent;
    outputDiv.appendChild(paragraph);
  }
  else{
    let iteraions = Math.floor(filterText.length/3);
    for (let i=0; i<=iteraions; i+=3){
      let paragraph = document.createElement('p');
      let currentParagraph = '';
      currentParagraph+=filterText[i];
      currentParagraph+=filterText[i+1];
      currentParagraph+=filterText[i+2];
      console.log(currentParagraph);
      paragraph.textContent=currentParagraph;
      outputDiv.appendChild(paragraph);
    }
  }
}