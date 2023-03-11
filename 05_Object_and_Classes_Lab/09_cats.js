function solve (input){
    class Cat {
        constructor (name,age){
            this.name = name;
            this.age = age;
        }
        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`); 
    }
    }

    let cats = [];
    for (let i = 0; i < input.length; i++) {
        let [name, age] = input[i].split(' ');
        let cat = new Cat(name,age);
        cats.push(cat);
    }
    for (let cat of cats){
        cat.me
        cat.meow();
    }
   
}




solve(['Mellow 2', 'Tom 5']);