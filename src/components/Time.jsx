import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => clearInterval(interval)
  }, []);

  let hour = time.getHours();
  const minute = time.getMinutes();

  hour = hour % 12 || hour;

  const minuteFormat = minute < 10 ? "0" + minute : minute;

  return (
    <>
      <span className="time">
        {hour}:{minuteFormat}
      </span>
    </>
  );
}
