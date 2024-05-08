import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Starwors from './Starwars';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [counter, setCounter] = useState(0);
    const [isManualUpdate, setManulaUpdate] = useState(false);

    const onClickRemoveLi = () => {
        setNumbers(oldState => oldState.slice(0, oldState.length - 1));
        setManulaUpdate(true);
    };
    
    useEffect(() => {
        console.log(`mount component - ${numbers.length}`);
    }, [numbers]);

    useEffect(() => {
        if (!isManualUpdate) {
            // setTimeout(() => setCounter(s => s + 1), 1000);
        } else {
            setNumbers(oldState => oldState + 1);
        }
    }, [counter]);

    useEffect(() => {
        console.log("update numbers");
    }, []);

    if (!numbers.length) {
        return null;
    }

    return (
        <div>
            <Starwors></Starwors>
            <h3>count : {counter}</h3>
            <button onClick={onClickRemoveLi}>Up</button>
            <ul >
                {numbers.map((number, index) =>
                    <li
                        data-key={index}
                        key={index}
                        className={styles['list-item']}
                    >
                        {number * 2}
                    </li>)}
            </ul>
            <button style={{ marginLeft: "100px" }} onClick={onClickRemoveLi}>Remove</button>
        </div>
    )
}

export default App
