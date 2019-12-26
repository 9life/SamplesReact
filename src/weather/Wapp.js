import React, { useState, useEffect } from 'react';
//import './App.css';

var styleP = {
    display: 'inline'
}
const Wapp = () => {
    // initialize state
    const [city, setCity] = useState('Tokyo')
    const [data, setData] = useState({
        isFetching: false,
        data: null
    })

    const ApiKey = "032291ed91f896b87b1d9c1f32a0de36";

    useEffect(() => {
        setData({
            isFetching: true
        })

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${ApiKey}`)
            .then((response) => response.json())
            .then((responseJson) => {
                setData({
                    isFetching: false,
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error)
                return false;
            })
        console.log(data.data);
    }, [city])

    return (
        <div className="App">
            {/* <header className="App-header"> */}
            <input type="text" placeholder="Tokyo" />
            <button onClick={(e) => {
                if (!e.target.previousElementSibling.value) {
                    alert('Please Enter City.')
                    return false;
                }
                setCity(`${e.target.previousElementSibling.value}`)
            }}>submit</button>
            {(() => {
                if (data.data)
                    return (
                        <div>
                            <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABYklEQVRIidWUPU7DQBCFvzHcAgWkHAEcCXEAIARKCgoSQQFUoeUKlOlIA5KRoKAAiR+DoKChiJIcgAIkkLhEBBmKYMtxvP4hCCmvml3P2zdvZ7ww6hDTB7u4/iLCVbcrZ+1b5wnQ3n5ZAVquI8HYdM54jHZelaoIVbtYflO4sNBzzejASkpQ+ACmBHYVefT2p5fKy38i0HadnIrOCuwDzz5RufRie7GyZuLHXJEPbd8cN4AGsFcobebRzxVVVoE5QBA9AU5/K9CH5vXhK1ADaoX5jZyOfb3H5acS8KZlQMw9ErtYjszxJiuxB8Oiz4FpruPmPJwTdpKpB6ZriIMvECRHxUmHmfqUyUGaihMFwoeYKjPxhurBzEKlhKV16T18Wy3XcZM4AwJxFYulB8DEz7IOTCbxMv4H2gksOsa0ADL1QLqyrRb3vZidKF7YSSYHzTvnISqOg19t2mlJi397i0Yf3xUSjtbGJvDMAAAAAElFTkSuQmCC"  /> 
                                 {city}, {data.data.city.country} <img src={`http://openweathermap.org/img/w/${data.data.list[0].weather[0].icon}.png`} /></p>
                            <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA50lEQVRIie2UMQrCQBBF/6wewpV4DG3MASTEa9iLF7DQNn3OkQSxTmzUY4jxFmMRAwFxZomKKP5yZ+a/+Qws8O0il6YyHAcAxQC829MJxDOb7DbarHHco2kOAB6YYpdJR0BlbtOCbFrUqQevBLSW4w18luqNVHd6e4LuM8PS5rX+N1D1+RuUob9sU6slbnAO/AkZiP8NM036Wb59VJcTGCzEeoUQe0QAEYaavVF65ASMjgZgxUMGEA4aAOBjawABke5vxB4R0EuKlBhrYYGVzfJM8nD6Ki5TP2TmOUCj6oX3YBNp5r+hK605PZNqTO11AAAAAElFTkSuQmCC" />
                                {data.data.list[0].main.temp}</span>
                            <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABr0lEQVRIie2UwU4UQRCGv+qZ1StmMcERCOwmZG/IgchRDBy44QPwAPsChA1gGiGKkTM+hE+gWYIXEg4mwI2QsCpZZhMjiVfYHsqDBBecmZ0Fj/yn7tRf/99dXdVwh/+JwmKohcVQO8kxiRGrybEOuLGB4svGVCFqbA/ZsLuddv/c9wfF83CruBBOZzOwahR9BYy6iGqpUs8niZcq9byfy22qypga5uNuInGJQzbsdhFVYFhhB2QVtCzwDEDhMyLrqFYERoA932PiwAY/MxkADNivXSa6/wkYTeLwx23X95mME4eUR/5mB38psnaxdaIy63s8bHruMapzwBmAGnmdJA7gp54OLQMIOn+4ErxrCbwtLByDyKqoloEPSQqXJcra37XlQAAG7I8eE7lGGgfS5qAN7jVPvSy8yxK1umaBM97MxXKzthw8b2uQFX32KMg5bwZYAlCR92n8f07d6V9z4zZN1uNE4KMoLxR2EJ64iGrSt9JR3a+jVKnnz3yzAQwjfKmZR0+xct7KuXEXAey/6T1xzea4iG4bdOW6ONxiDq7AqokTh1ve4K9BvPgdMuE3OqSZ1EQ1kpcAAAAASUVORK5CYII="/> 
                                {data.data.list[0].weather[0].main}</span>
                            <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB8ElEQVRIieWUMWhTURSGv/NezGRREdEkSkcpHRS0OCcNBNoODlJwEWoadCoIBQXBdJW6ZSixUcExHUXbkKSOxaKDU+lsfUaKRp51ec27x6FNqSGv7aMdFP/t/pz//Pfcw/3hX4eEFSSqpWFE8or2CbIilplaS+XeHIlBovZ0RLFedfKWpcNBJlYYA8XKb91KJ30/elzQSQDfSD5IE8oAZB54fPL7icLXzK1fnu0VtwzpC1JEwrR30tlHAA7QXy5Hm8a9C6Cwsq9BvFbSMGZNXNhWqMhUUF3IJ/oDHso7IzLUGMzOH6LPX46dfxB2B13wE6hjyQMnlV1tk4fZQSd6gOsYXYpXnl9ok6GjIghn3r44F/FNQdAbwJyTHh+FI5xgPTnWiLZaE9vHTJs/yD/wBPnYGWrxWskFejZtO7aeHGt0aHZ6HWSCqKIDxsjr84uzQ7v4OkDEN4XehWKsd6EYa0XsAgCilXbRvju48r54rPHDmlDkicLyl/T4NYD44rOLGF0CTnVIvomtlz8nc2uBEySqpXvxeul+f7kc/XD1zma3UHNS2VV86xIwB7iAi2h5d3MICjuRm6gONE+7/tnKyxnbeF1Dzcnc/gSM7vUCXSdQzENAUaZt29tAmYa9Qy2UgZPOVS1LRxSWgY3/I9SC8BtxWrwtxrQo3gAAAABJRU5ErkJggg=="  />
                                {data.data.list[0].wind.speed}</span>
                                <span><img src="https://img.icons8.com/material/24/000000/scuba-pressure-gauge.png"  />
                                {data.data.list[0].main.pressure}
                                </span>
                                <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABdElEQVRIid2Tv0vDQBzF3zdgEuqQ3dHaDmZMpkxZpUKdBDcLFf0zdJaKxV03Z4Wqf4EVSutkFUyxW2eFRmhRz6X5QZJrLqFTv1ve5d7n3iUPWLqx7aFqWoNrwxgVFuEnRQV3+nMBsD0o7vkiABR+MC2nCuAmJO1026XbNBPDGBUgu1eYrtZ6vbXv8JqfQNf7MgNOI3vPNrYcJQ0gKW6TCLtJqX2Aqq0cEVCKrK9rX+xwnrlpOVUG1AGAgIPZLcQBBKolGRBon2c+S9eIyI1w6uAjs9jpveHpmKUrRuRiOHUAILxxfF55AJHUPuCPsZNkFylZB4RS+4Dnp3KLgW0D6AAYA+iApEr3sXjPBQikJs4LsbHtoTqe/l6ySaHu/euG9V4hUCsODg4WazJvvIZLitv0tF67fJeWWihB3oYLAXS9L6ua/BIp4cenhs3BQ2mStj/1ivI2XBiQp+GZAHkang2Qo+GZAAzsOBk8p+FZACL/+nLPP7vbhOksgxfiAAAAAElFTkSuQmCC"/>
                                {data.data.list[0].main.humidity}
                                </span>
                        </div>

                    )
            })()}
            {/* </header> */}
        </div>
    );
}

export default Wapp;