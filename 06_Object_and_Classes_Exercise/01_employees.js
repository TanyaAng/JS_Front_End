function solve (input){
    class Employee{
        constructor(name, id, email){
            this.name = name;
            this.id = id;
        }
        setId(){
            this.id=this.name.length;
        }
        printInfo(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.id}`);
        }
    }
    for (let line of input){
        let name = line;
        let employee = new Employee(name);
        employee.setId();
        employee.printInfo();
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );