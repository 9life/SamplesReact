import React, { useState } from 'react';
//import './App.css';
import Form from './Form';
import Weather from './WeatherApp';

const WeatherApp = () => {
    const [weather, setWeather] = useState([])
    const APIKEY = '6e6aa983a792445c22d95a90a33fea49'

    async function fetchData(e) {
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        e.preventDefault()
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${APIKEY}`)
            .then(response => response.json())
            .then(data => data)
            if(city && country) {
                setWeather({
                  data: apiData,
                  city: apiData.city,
                  country: apiData.sys.country,
                  description: apiData.weather[0].description,
                  temperature: apiData.main.temp,
                  error:""
                }
                )} else {
                  setWeather({
                    data: '',
                    city: '',
                    country: '',
                    description: '',
                    temperature: '',
                    error:"Please Type A City And Country"
                }
                )}
    }

    return (
        <div className="App">
            <h6>WEATHER APP</h6>
            <Form getWeather={fetchData} />
            <Weather
                city={weather.city}
                country={weather.country}
                description={weather.description}
                temperature={weather.temperature}
                error={weather.error}
            />
            {console.log(weather.data)}
        </div>
    );
}

export default WeatherApp;