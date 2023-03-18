function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let extraText = document.querySelector('#extra');
    if (btn.textContent == 'More'){
        extraText.style.display = 'block';
        btn.textContent = 'Less';
    } else {
        extraText.style.display = 'none';
        btn.textContent = 'More';
    }
}