function solve (input){
    class City {
        constructor (city, latitude, longitude){
            this.city = city;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        };
        printCity(){
            console.log(
                {
                    town: this.city,
                    latitude: this.latitude,
                    longitude: this.longitude
                });
        };
    }
    for (let line of input){
        let [city, latitude, longitude] = line.split(' | ');
        let cityObj = new City(city, latitude, longitude);
        cityObj.printCity();
        
    };
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);