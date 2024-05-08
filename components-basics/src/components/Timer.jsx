import { useState } from "react";

export default function Timer(props) {
    const [time, setTime] = useState(props.startTime);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h1>Timer</h1>
            <p>{time}</p>
        </div>
    );
}