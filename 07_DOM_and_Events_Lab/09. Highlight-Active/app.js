function focused() {
    let allInputs = Array.from(document.getElementsByTagName('input'));
    
    for (let input of allInputs){
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', outOfFocus);
        
    }
    
    function onFocus(event){
        let parent = this.parentElement;
        parent.style.backgroundColor = 'grey';
        parent.classList.add('focused');
    }

    function outOfFocus(event){
        let parent = this.parentElement;
        parent.style.backgroundColor = 'unset';
        if (parent.classList.contains('focused')){
            parent.classList.remove('focused');
        }

    }
}