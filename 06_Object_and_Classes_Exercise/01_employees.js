// VARIANT I
function solve (input){
    class Employee{
        constructor(name, id){
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

// VARIANT II
function parseEmployees (input){
    Object.entries (input.reduce((data,employee) => {
        data[employee] = employee.length;
        return data;
    }, {})
    ).forEach(([employee,length])=>console.log(`Name: ${employee} -- Personal Number: ${length}`))
}

parseEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );