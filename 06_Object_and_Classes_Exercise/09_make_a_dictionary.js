function solve (input){
    class SomeObject {
        constructor(term,definition){
            this.term = term;
            this.definition = definition;
        }
        print(){
            console.log(`Term: ${this.term} => Definition: ${this.definition}`);
        }
    };
    let objs = [];
    for (let line of input){
        let lineJSON= JSON.parse(line);
        let objKey = Object.keys(lineJSON);
        let newObj = new SomeObject(objKey[0], lineJSON[objKey]);
        objs.push(newObj);
    };
    let sortedObjs = objs.sort(function(objFisrt, objSecond) {
        return objFisrt.term.localeCompare(objSecond.term);
    });
    for (let obj of sortedObjs) {
        obj.print();
    }
};

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );