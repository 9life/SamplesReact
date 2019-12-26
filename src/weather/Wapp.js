import React, {useState, useEffect} from 'react';
//import './App.css';

const Wapp = () => {
  // initialize state
  const [city, setCity] = useState('Tokyo')
  const [data, setData] = useState({
      isFetching: false,
      data: null
  })

  const ApiKey ="032291ed91f896b87b1d9c1f32a0de36";

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
        <input type="text" placeholder="Tokyo"/>
        <button onClick={(e) => {
          if (! e.target.previousElementSibling.value) {
            alert('Please Enter City.')
            return false;
          }
          setCity(`${e.target.previousElementSibling.value}`)
        }}>submit</button>
        {(() => {
          if (data.data)
            return (
               <div>
                 <p>Place: {city}</p>
                 <p>Temperature: {data.data.list[0].main.temp}</p>
                 <p>Wheather: {data.data.list[0].weather[0].main}</p>
                 <p>Wind: {data.data.list[0].wind.speed}</p>
                 <img src={`http://openweathermap.org/img/w/${data.data.list[0].weather[0].icon}.png`}/>
               </div>
               
            )
        })()}
      {/* </header> */}
    </div>
  );
}

export default Wapp;