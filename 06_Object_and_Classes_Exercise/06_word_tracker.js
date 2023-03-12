function solve(input){
    let words={}
    let searchedWords = input.shift().split(' ');
    for (let word of searchedWords) {
        let count = input.filter((w) => w===word).length;
        words[word] = count;
    }
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