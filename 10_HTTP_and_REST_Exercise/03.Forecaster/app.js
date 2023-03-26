function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const TODAY_WEATHER_URL = 'http://localhost:3030/jsonstore/forecaster/today/'
    const UPCOMING_WEATHER_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    const cityNameInput = document.getElementById('location');
    const forecastContainer = document.getElementById('forecast');
    const button = document.getElementById('submit');

    button.addEventListener('click', getWeather);

    function getWeather(){
        let cityName = cityNameInput.value;
        console.log(cityName);

        let cityCode;

        fetch(`${BASE_URL}`)
            .then((res) => res.json())
            .then((data)=>{
                console.log(data);
                for (const city of data){
                    const {code, name} = city;
                    if (name === cityName){
                        cityCode = code;
                        getWeatherToday(cityCode);
                        getWeatherTomorrow(cityCode);

                    }
                }
            })
            .catch(()=>errorHandler());
        }

    function getWeatherToday(cityCode){
        fetch(`${TODAY_WEATHER_URL}${cityCode}`)
            .then ((res)=> res.json())
            .then ((data)=> 
            {   
                forecastContainer.style.display = 'block';
                const currentContainer = document.getElementById('current');

                const newForecastsContainer = document.createElement('div');
                newForecastsContainer.classList.add('forecasts');
                
                const symbolSpan  = document.createElement('span');
                symbolSpan.classList.add('condition', 'symbol');
                symbolSpan.innerHTML = getConditionSymbol(data.forecast.condition);
                
                const infoSpan = document.createElement('span');
                infoSpan.classList.add('condition');
                
                const cityNameSpan = document.createElement('span');
                cityNameSpan.classList.add('forecast-data');
                cityNameSpan.innerHTML = data.name;
                
                const degreeSpan = document.createElement('span');
                degreeSpan.classList.add('forecast-data');
                degreeSpan.innerHTML = `${data.forecast.low}${getConditionSymbol('Degrees')}/${data.forecast.high}${getConditionSymbol('Degrees')}`;
                
                const conditionSpan = document.createElement('span');
                conditionSpan.classList.add('forecast-data');
                conditionSpan.innerHTML = data.forecast.condition;
                

                currentContainer.appendChild(newForecastsContainer);
                newForecastsContainer.appendChild(symbolSpan);
                infoSpan.appendChild(cityNameSpan);
                infoSpan.appendChild(degreeSpan);
                infoSpan.appendChild(conditionSpan);
                newForecastsContainer.appendChild(infoSpan);

            })
            .catch(()=>errorHandler());
        }

    function getWeatherTomorrow(cityCode){
        fetch(`${UPCOMING_WEATHER_URL}${cityCode}`)
            .then ((res)=> res.json())
            .then ((data) => {
                const upcommingContainer = document.getElementById('upcoming');
                const forecastInfo = document.createElement('div');
                forecastInfo.classList.add('forecast-info');

                console.log(data);
                data.forecast.forEach(item=>
                    {
                        const upcommingSpan = document.createElement('span');
                        upcommingSpan.classList.add('upcoming');
                        
                        const symbolSpan = document.createElement('span');
                        symbolSpan.classList.add('symbol');
                        symbolSpan.innerHTML = getConditionSymbol(item.condition);

                        const degreeSpan = document.createElement('span');
                        degreeSpan.classList.add('forecast-data');
                        degreeSpan.innerHTML = `${item.low}${getConditionSymbol('Degrees')}/${item.high}${getConditionSymbol('Degrees')}`;

                        
                        const conditionSpan = document.createElement('span');
                        conditionSpan.classList.add('forecast-data');
                        conditionSpan.innerHTML = `${item.condition}`;
                        
                        upcommingSpan.appendChild(symbolSpan);
                        upcommingSpan.appendChild(degreeSpan);
                        upcommingSpan.appendChild(conditionSpan);
                        forecastInfo.appendChild(upcommingSpan);
                    }
                )
                upcommingContainer.appendChild(forecastInfo);

            })
            .catch(()=>errorHandler());
        }        

    function getConditionSymbol(condition){
        switch(condition){
            case 'Sunny': return '&#x2600;';
            case 'Partly sunny': return'&#x26C5;';
            case 'Overcast': return '&#x2601;'; 
            case 'Rain': return '&#x2614;'; 
            case 'Degrees': return'&#176;';
        }
    }

    function errorHandler(){
        forecastContainer.style.display = 'block';
        forecastContainer.textContent = 'Error';
    }
    return;
}


attachEvents();