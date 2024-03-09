import React, { useState, useEffect } from 'react';

const App = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [newseconds, setSeconds] = useState(0);
  const [newminutes, setMinutes] = useState(0);
  const [newhours, setHours] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("Mar 10, 2024 12:00:00").getTime();

    const countdownFunction = () => {
      const now = new Date().getTime();
      const total = countDownDate - now;

      const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((total % (1000 * 60)) / 1000);
      const ms = Math.floor((total % 1000) / 10)

      setMilliseconds(ms);
      setSeconds(seconds);
      setHours(hours);
      setMinutes(minutes);
    };

    const timer = setInterval(countdownFunction, 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {
        (newhours >= 0 && newminutes >= 0 && newseconds >= 0 && milliseconds >= 0)
        &&
        (
          <>
            <div className="circle top-left"></div>
            <div className="circle top-right"></div>
            <div className="heading">
              <p className="countdown_timer">Hackathon Ends in</p>
            </div>
            <div className="main">
              {/* { console.log() } */}
              <div className="countdown_container">
                <div className="mainSquare">
                  <span id="hour">{((String(newhours)).split('')).length == 1 ? "0" + newhours : newhours}</span>
                  <div className="upper square"></div>
                  <div className="square"></div>
                  <span className="time">Hours</span>
                </div>
                <div className="mainSquare">
                  <span id="min">{((String(newminutes)).split('')).length == 1 ? "0" + newminutes : newminutes}</span>
                  <div className="upper square"></div>
                  <div className="square"></div>
                  <span className="time">Mins</span>
                </div>
                <div className="mainSquare">
                  <span id="sec">{((String(newseconds)).split('')).length == 1 ? "0" + newseconds : newseconds}</span>
                  <div className="upper square"></div>
                  <div className="square"></div>
                  <span className="time">Secs</span>
                </div>
                <div className="mainSquare">
                  <span id="ms">{milliseconds}</span>
                  <div className="upper square"></div>
                  <div className="square"></div>
                  <span className="time">Ms</span>
                </div>
              </div>
            </div>
          </>
        )
      }
      {
        (newhours < 0 && newminutes < 0 && newseconds < 0 && milliseconds < 0)
        &&
        <h1 className="timeUp">Time up!!!</h1>
      }
    </>
  );
};

export default App;
