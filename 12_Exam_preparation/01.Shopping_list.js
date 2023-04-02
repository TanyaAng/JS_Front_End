function solve(input){
    let groceries = input.shift().split('!');
    let commandMapper = {
        'Urgent': addItem,
        'Unnecessary': removeItem,
        'Correct': changeName,
        'Rearrange': addToEnd
    }


    for (let i=0; i<input.length; i++){
        if (input[i]==='Go Shopping!'){
            break;
        }
        let line = input[i].split(' ');
        command = line[0];
        commandMapper[command](...line.slice(1));
    }

    function addItem(item){
        if (isItemExist(item)){
            return
        }
        groceries.unshift(item);

    }
    function removeItem(item){
        if (!isItemExist(item)){
            return
        }
        let itemIndex = groceries.indexOf(item);
        groceries.splice(itemIndex,1);

    }
    function changeName (oldName, newName){
        if (!isItemExist(oldName)){
            return
        }
        let itemIndex = groceries.indexOf(oldName);
        groceries[itemIndex]=newName;

    }
    function addToEnd(item){
        if (!isItemExist(item)){
            return
        }
        let itemIndex = groceries.indexOf(item);
        groceries.splice(itemIndex,1);
        groceries.push(item);

    }

    function isItemExist(item){
        let ifExist = groceries.some(el => el===item);
        return ifExist;
    }
    console.log(groceries.join(', '))

}

// solve((["Tomatoes!Potatoes!Bread",
// "Unnecessary Milk",
// "Urgent Tomatoes",
// "Go Shopping!"])
// )

solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
