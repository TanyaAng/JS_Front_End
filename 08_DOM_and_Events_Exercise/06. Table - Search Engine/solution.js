function solve() {
   
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick(event) {
      let input = document.querySelector('#searchField').value;

      let tdItems = Array.from(document.querySelectorAll('tbody td'));
      for (let td of tdItems){
         let row  = td.parentElement;         
         row.classList.remove('select');
      }

      for (let td of tdItems){
         if (td.textContent.includes(input)){
            let row  = td.parentElement;
            row.classList.add('select');
         } 
      }

   }
}
