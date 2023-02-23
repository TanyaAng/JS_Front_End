function sortNames(names){
    result= names
    .sort((a,b) => a.localeCompare(b))
    .map((name,index) => `${index+1}.${name}`)
    .join('\n');
    console.log(result);
}

sortNames(["John"]);