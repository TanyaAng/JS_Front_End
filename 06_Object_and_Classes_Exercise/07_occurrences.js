function solve (input){
    let occurrences = {};
    let words = input.split(' ');
    
    for (let word of words){
        let wordToLower = word.toLowerCase();
        if (occurrences.hasOwnProperty(wordToLower)){
            occurrences[wordToLower]++;
        } else {
            occurrences[wordToLower] = 1;
        }
    };
    let result = [];
    for (let word in occurrences) {
        if (occurrences[word]%2 > 0){
            result.push(word);
        };
    };
    console.log(result.join(' ')); 
}

solve('Cake IS SWEET is Soft CAKE sweet Food');