import React, { useState, useEffect } from "react";

function useFetch(url, defaultData) {
    const [data, updateData] = useState(defaultData)

    useEffect(async () => {
        if (!url) {
            updateData(defaultData)
            return
        }
        const resp = await fetch(url)
        const json = await resp.json()
        updateData(json)
    }, [url])

    return data
}

function useFetchWeather(location) {
    const apiKey = "032291ed91f896b87b1d9c1f32a0de36";
    const query = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
    return useFetch(location ? query : null, {});
}

const Wthr2App = () => {
    const [location, setLocation] = useState("Saint Petersburg, RU");

    const handleInputChange = e => {
        setLocation(e.target.value);
    }
    
    const result = useFetchWeather(location);

    return(
        <div>
            <input type="input" value={location} onChange={handleInputChange}/>
            <p>{JSON.stringify(result)}</p>
        </div>
    )
}

export default Wthr2App;