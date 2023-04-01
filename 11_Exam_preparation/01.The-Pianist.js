function pianistOrganizer (input){
    let numLines = input.shift()
    let pieces =[]

    for (let i=0; i<numLines; i++){
        let line = input.shift();
        let [piece, composer, key] = line.split('|');
        let obj = {
            piece,
            composer,
            key
        };

        pieces.push(obj);
    }

    for(let line of input){
        if (line === 'Stop'){
            break;
        }
        line = line.split('|');
        command = line.shift();
        switch (command){
            case 'Add': addPiece(line); break;
            case 'Remove': removePiece(line); break;
            case 'ChangeKey': changeKey(line); break;
        } 

    }

    function addPiece(line){
        let [piece, composer, key] = line;
        let found = pieces.some(el => el.piece === piece);
        if (found){
            console.log(`${piece} is already in the collection!`);
            return;
        }
        let obj = {piece,composer,key}
        pieces.push(obj);
        console.log(`${piece} by ${composer} in ${key} added to the collection!`)
    }

    function removePiece(line){
        let piece = line[0];
        let found = pieces.some(el => el.piece === piece);
        if (found){
            pieces = pieces.filter(el => el.piece != piece);
            console.log(`Successfully removed ${piece}!`);
            return;
        }
        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    }
    function changeKey(line){
        let [piece, newKey] = line;
        let obj = pieces.filter(obj=> obj.piece===piece)[0];
        if (!obj){
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            return;
        }

        obj.key = newKey;
        
        console.log(`Changed the key of ${piece} to ${newKey}!`);

    }

    for(let obj of pieces){
        console.log(`${obj.piece} -> Composer: ${obj.composer}, Key: ${obj.key}`);
    }
}


input=[
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  
pianistOrganizer(input)