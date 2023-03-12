function solve (input){
    class Hero{
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items =items;
        }
        printer(){
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items}`);
        };
    };

    let heros = [];

    for (let line of input){
        let heroInfo =line.split(' / ');
        let hero = new Hero(heroInfo[0], heroInfo[1], heroInfo[2]);
        heros.push(hero);
    };
    let sortedHeros = heros.sort(function(heroFirst,heroSecond) {
        return heroFirst.level - heroSecond.level;
    });
    for (let hero in sortedHeros){
        sortedHeros[hero].printer();
    };
};


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );
