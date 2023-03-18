function create(words) {
   let divConteiner = document.getElementById('content');

   for (let word of words){
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display='none';

      div.addEventListener('click', () => {
         paragraph.style.display = 'block';
      });
      
      div.appendChild(paragraph);
      divConteiner.appendChild(div);      
   }
}