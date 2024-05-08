import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const onIncrementClick = () => {
        setCount(oldValue => oldValue + 1);
    };

    const clearCounterHandler = () => {
        setCount(0);
    };

    // if (count < 0) {
    //     return <p>Invalid count!</p>
    // }

    let message = null;

    switch (count) {
        case 1:
            message = "First blood";
            break;
        case 2:
            message = "Second kill";
            break;
        case 3:
            message = "Triple kill";
            break;
        case 4:
            message = "4 blood";
            break;
        case 5:
            message = "5 blood";
            break;
        case 6:
            message = "6 blood";
            break;
    }

    return (
        <div>

            {count < 0
                ? <p>DontTTTTTTTTTTTTTTTTTTTTTTTT</p>
                : <p>Valid count!</p>}

            {count == 0 && <p>Start incrementing!</p>}

            <h4>{message}</h4>
            <h3>Counter</h3>

            <p>Count: {count}</p>

            <button disabled={count < 0} onClick={() => { setCount(count - 1) }}>-</button>
            <button onClick={clearCounterHandler}>Clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    )
}