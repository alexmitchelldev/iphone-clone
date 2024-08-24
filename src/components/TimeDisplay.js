import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // Set the initial time
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return <div className="time">{time}</div>;
};

export default TimeDisplay;
