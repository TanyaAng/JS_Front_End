function extractText() {
    let items = Array.from(document.querySelectorAll("ul#items li"));
    let textarea = document.getElementById('result');
    items.forEach((li) => textarea.textContent+=li.textContent+'\n');
    
}