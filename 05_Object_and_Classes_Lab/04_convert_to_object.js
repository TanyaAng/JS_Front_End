function convertToObject(text){
    let personAsJSON = JSON.parse(text);
    for (let key in personAsJSON){
        console.log(`${key}: ${personAsJSON[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')