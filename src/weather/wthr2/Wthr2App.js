import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks";

function Wthr2App() {

    const apiKey = "032291ed91f896b87b1d9c1f32a0de36";
    const [city, setCity] = useState('Saint Petersburg, RU');
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    const [data, loading] = useFetch(url);

    return (
        <>
            <p>weather</p>
            {loading ? (<p>Loading...</p>) : (
                <ul>
                    {data.list.map(d => (
                        <li>
                            <p>date {d.dt_txt}
                            <span>  min {d.main.temp_min} </span>
                            <span>  temp {d.main.temp}</span>
                            <span>  max {d.main.temp_max} </span>
                            <span>  feels like {d.main.feels_like}</span>
                            {d.weather.map(k => (
                                <span>   {k.main}</span>
                            ))}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )

}
export default Wthr2App;