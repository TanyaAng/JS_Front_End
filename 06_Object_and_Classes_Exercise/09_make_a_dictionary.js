function solve(input) {
  let objs = [];
  for (let line of input) {
    let parsedLine = JSON.parse(line);
    let key = Object.keys(parsedLine);
    let term = key[0];
    let definition = parsedLine[term];
    let keys = [];
    objs.forEach((obj) => {
      keys = keys.concat(obj['term']);
    });
    if (!keys.includes(term)){
        objs.push({term,definition});
    }
    else{
        for (let obj of objs){
            if (obj['term'] === term){
                obj['definition'] = definition;
                break;
            };
        };
    };
  };

  let sortedObjs = objs.sort(function (objFisrt, objSecond) {
    return objFisrt.term.localeCompare(objSecond.term);
  });

  for (let obj of sortedObjs) {
    console.log(`Term: ${obj.term} => Definition: ${obj.definition}`);
  };
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  '{"Coffee":"Something new."}',
]);
