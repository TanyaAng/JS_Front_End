function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach((button) => {
        button.addEventListener('click', toggleInformation);
    });

    function toggleInformation(event){
        const btn = event.currentTarget;
        const currentProfile = btn.parentElement;
        let children = Array.from(currentProfile.children);
        
        let unlockRadionInput = children[4];
        const addInfo = children[9];

        if(unlockRadionInput.checked){
            if (btn.textContent === 'Show more'){
                addInfo.style.display = 'block';
                btn.textContent = 'Hide it';
            }else {
                addInfo.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }

    }

}