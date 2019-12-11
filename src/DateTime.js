import React, { useEffect, useState } from "react";

function Clock(props) {
    const [time, setTime] = useState([]);
    
    const tick = () => {
        setTime(new Date().toLocaleString());
    };

    useEffect(() => {
        setTime(new Date().toLocaleString());
    }, [])

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);

        return () => clearInterval(timerID);
    });
  
    return <p>Now is {time}.</p>;
}
export default Clock;
