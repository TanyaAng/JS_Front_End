function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations';
    

    
    const button = document.getElementById('submit');
    button.addEventListener('click', getWeather);

    function getWeather(event){
        const TODAY_WEATHER = 'http://localhost:3030/jsonstore/forecaster/today/'
        const UPCOMING_WEATHER = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
        const cityName = document.getElementById('location').value;
        const forecastContainer = document.getElementById('forecast');
        let cityCode;

        fetch(`${BASE_URL}`)
        .then((res) => res.json())
        .then((data)=>{
            for (const city of data){
                const {code, name} = city;
                if (name === cityName){
                    cityCode = code;

                    fetch(`${TODAY_WEATHER}${cityCode}`)
                    .then ((res)=> res.json())
                    .then ((data)=> 
                    {   
                        forecastContainer.style.display = 'block';
                        const currentContainer = document.getElementById('current');

                        const newForecastsContainer = document.createElement('div');
                        newForecastsContainer.classList.add('forecasts');
                        currentContainer.appendChild(newForecastsContainer);

                        const symbolSpan  = document.createElement('span');
                        symbolSpan.classList.add('condition', 'symbol');
                        symbolSpan.textContent = getConditionSymbol(data.forecast.condition);
                        newForecastsContainer.appendChild(symbolSpan);

                        const infoSpan = document.createElement('span');
                        infoSpan.classList.add('condition');
                        
                        const cityNameSpan = document.createElement('span');
                        cityNameSpan.classList.add('forecast-data');
                        cityNameSpan.textContent = data.name;
                        infoSpan.appendChild(cityNameSpan);

                        const degreeSpan = document.createElement('span');
                        degreeSpan.classList.add('forecast-data');
                        degreeSpan.textContent = `${data.forecast.low}°/${data.forecast.high}°`;
                        infoSpan.appendChild(degreeSpan);

                        const conditionSpan = document.createElement('span');
                        conditionSpan.classList.add('forecast-list');
                        conditionSpan.textContent = data.forecast.condition;
                        infoSpan.appendChild(conditionSpan);

                        newForecastsContainer.appendChild(infoSpan);

                    }
                    
                    
                    )
                    .catch((err)=>
                    {
                        forecastContainer.style.display = 'block';
                        forecastContainer.textContent = 'Error';
                    })
                    
                    fetch(`${UPCOMING_WEATHER}${cityCode}`)
                    .then ((res)=> res.json())
                    .then ((data) => 
                    {
                        const upcommingContainer = document.getElementById('upcoming');
                        const forecastInfo = document.createElement('div');
                        forecastInfo.classList.add('forecast-info');

                        console.log(data);
                        data.forecast.forEach(item=>
                            {
                                const upcommingSpan = document.createElement('span');

                                const symbolSpan = document.createElement('span');
                                symbolSpan.classList.add('symbol');
                                symbolSpan.textContent = getConditionSymbol(item.condition);
                                upcommingSpan.appendChild(symbolSpan);


                                const degreeSpan = document.createElement('span');
                                degreeSpan.classList.add('forecast-data');
                                degreeSpan.textContent = `${item.low}°/${item.high}°`;
                                upcommingSpan.appendChild(degreeSpan);

                                const conditionSpan = document.createElement('span');
                                conditionSpan.classList.add('forecast-data');
                                conditionSpan.textContent = `${item.condition}`;
                                upcommingSpan.appendChild(conditionSpan);

                                forecastInfo.appendChild(upcommingSpan);
                            }
                        )
                        upcommingContainer.appendChild(forecastInfo);

                    }
                    )

                    .catch((err)=>
                    {
                        forecastContainer.style.display = 'block';
                        forecastContainer.textContent = 'Error';
                    })

                    return;
                }
            }
        })
        .catch((err)=>
        {
            forecastContainer.style.display = 'block';
            forecastContainer.textContent = 'Error';
        }
        )}

        function getConditionSymbol(condition){
            let symbol;
            switch(condition){
                case 'Sunny': symbol = '☀'; break;
                case 'Partly sunny': symbol = '⛅'; break;
                case 'Overcast': symbol = '☁'; break;
                case 'Rain': symbol = '☂'; break;
                case 'Degrees': symbol = '°'; break;
            }
            return symbol;
        }
}

attachEvents();