function solve(input){
    let words={}
    let searchedWords = input.shift().split(' ');
    for (let word of searchedWords) {
        words[word] = 0;
    }
    
    for (let word of input){
        if (words.hasOwnProperty(word)){
            words[word]+=1;
        };
    };
    let sortable = Object.entries(words);
    let sortedWords = sortable.sort(function([,a],[,b]){
        return b-a;
    });
    for (let word of sortedWords){
        console.log(`${word[0]} - ${word[1]}`);
    };
};

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );