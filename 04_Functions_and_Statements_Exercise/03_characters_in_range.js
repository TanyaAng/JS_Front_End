function ASCIIrange (ch1, ch2) {
    let charCode1 = ch1.charCodeAt(0);
    let charCode2 = ch2.charCodeAt(0);
    let minCode = Math.min(charCode1,charCode2);
    let maxCode = Math.max(charCode1,charCode2);
    let result=[];
    for (let i=minCode+1; i<maxCode; i++){
        let currentCh = String.fromCharCode(i);
        result.push(currentCh);
    }
    console.log(result.join(' '));
    
}

ASCIIrange('#',':');