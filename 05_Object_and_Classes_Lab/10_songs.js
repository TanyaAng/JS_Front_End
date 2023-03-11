function solve(input) {
    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        };
    };
    let songs = [];
    numberOfSongs = input[0];
    typeList=input.pop();
    for (let i = 1; i <= numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    };

    for (let song of songs) {
        if (typeList === 'all'){
            console.log(song.name);
        }
        if (song.type === typeList){
            console.log(song.name);
        };
    };
    
};

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']      
    );