function passwordValidator (pass) {
    let length = pass.length;
    let valid_password = true;

    if (length<6 || length >10) {
        console.log ("Password must be between 6 and 10 characters");
        valid_password=false;
    }

    if (checkIfOnlyLetterAndDigits(pass) === false) {
        console.log ('Password must consist only of letters and digits');
        valid_password=false;
    }

    if (checkIfHaveAtLeastTwoDigits(pass) === false) {
        console.log ('Password must have at least 2 digits');
        valid_password=false;
    }

    if (valid_password) {
        console.log ("Password is valid")
    }

    function checkIfOnlyLetterAndDigits (pass) {
        for (ch of pass) {
            let chASCIIcode = ch.charCodeAt(0);
            if ((chASCIIcode>=48 && chASCIIcode<=57) || (chASCIIcode>=65 && chASCIIcode<=90) || (chASCIIcode>=97 && chASCIIcode<=122)) {
                continue;
            } else {
                return false;
            }   
        }
        return true;
    }

    function checkIfHaveAtLeastTwoDigits (pass) {
        let count_digits = 0;
        for (ch of pass) {
            let chASCIIcode = ch.charCodeAt(0);
            if (chASCIIcode>=48 && chASCIIcode<=57) {
                count_digits++;
            }
        }
        if (count_digits>=2) {
            return true;
        } else {
            return false;
        }
        
    }
}

passwordValidator('Pa$s$s');