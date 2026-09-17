import { useState, useEffect } from 'react'

function Hero() {
  const [pioneerDistance, setPioneerDistance] = useState("");
  const [voyagerDistance, setVoyagerDistance] = useState("");

  function GetVoyagerDistance() {
    // using NASA's official website to get an up-to-date epoch
    // this might go out of sync with time, but it's the best way to get the data that i know of (for now)
    const distance = GetDistance(new Date("2026-09-11T14:40:00"), 25690090431, 17);
    return numberWithCommas(distance);
  }

  function GetPioneerDistance() {
    // im using the distance recorded from June 24, 2024 as an epoch
    const distance = GetDistance(new Date("2024-06-24T00:00:00"), 16922700000, 11.155); 
    return numberWithCommas(distance);
  }

  function GetDistance(epochDate, epochDistance, speed) {
    const currentDate = new Date();
    const diffTime = (currentDate - epochDate) / 1000;

    const distanceToAdd = Math.floor(diffTime * speed);
    const totalDistance = distanceToAdd + epochDistance;

    return totalDistance;
  }

  // Source - https://stackoverflow.com/a/2901298
  // Posted by Elias Zamaria, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-09-11, License - CC BY-SA 4.0

  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Source - https://stackoverflow.com/a/71172765
  // Posted by Amila Senadheera, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-09-11, License - CC BY-SA 4.0

  useEffect(() => {
    // create a interval and get the id
    const myInterval = setInterval(() => {
      setPioneerDistance(GetPioneerDistance);
      setVoyagerDistance(GetVoyagerDistance);
    }, 100);
    // clear out the interval using the id when unmounting the component
    return () => clearInterval(myInterval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-flex-container">
        <div className="spacecraft-stats-container hero-col">
          <p className="spacecraft-stats" id="v1">
            // voyager_1<br></br>
            v1.current_distance = {voyagerDistance} km
          </p>
        </div>
        <div className="name-container hero-col">
          <h1 className="name-header">Aaron Hampson</h1>
          <h2 className="name-subheader">Full-Stack Developer</h2>
        </div>
        <div className="spacecraft-stats-container hero-col">
          <p className="spacecraft-stats" id="p11">
            // pioneer_11<br></br>
            p11.current_distance = {pioneerDistance} km
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero