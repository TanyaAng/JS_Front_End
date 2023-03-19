function solve() {
  let text = document.getElementById('input').value;
  let outputDiv = document.getElementById('output');
  
  let arrText = text.split('.');
  let sentences = arrText.filter(str => str!='').map(str => str+'.').map(str => str.trimStart());

  while (sentences.length>0){
    let paragraphSentences = sentences.splice(0,3);
    let paragraph = document.createElement('p');
    paragraph.textContent = paragraphSentences;
    outputDiv.appendChild(paragraph);
  }

  document.getElementById('input').value='';
}