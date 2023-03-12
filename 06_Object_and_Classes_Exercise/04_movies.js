function solve(input){
    class Movie {
        constructor(name,director, date){
            this.name = name;
            this.director = director;
            this.date = date;
            
        }
    };

    let movies=[];
    for (let line of input){
        let movieArr = line.split(' ');
        if (movieArr.includes('addMovie')){
            let movieInfo = line.split('addMovie ');
            let movie = new Movie(movieInfo[1]);
            movies.push(movie);
        };
        if (movieArr.includes('directedBy')){
            let movieInfo = line.split(' directedBy ');
            let movieName = movieInfo[0];
            let movieDirector = movieInfo[1];
            for (let movie of movies){
                if (movie.name === movieName){
                    movie.director = movieDirector;
                };
            };
        }
        else if (movieArr.includes('onDate')){
            let movieInfo = line.split(' onDate ');
            let movieName = movieInfo[0];
            let movieDate = movieInfo[1];
            for (let movie of movies){
                if (movie.name === movieName){
                    movie.date = movieDate;
                };
            };
        };
    };
    for (let movie of movies){
        if (movie.name && movie.date && movie.director){
            console.log(JSON.stringify(movie));
        };
    };
};

solve(
    [
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );