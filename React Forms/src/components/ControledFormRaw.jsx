import { useState } from "react";

export default function ControledForm() {
    const [username, setUsernameValue] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");

    const resetFormHandler = () => {
        setUsernameValue("");
        setPassword("");
        setAge("");
    };

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setAge(Number(e.target.value));
    };

    const submitHandler = () => {
        console.log(username);
        console.log(password);
        console.log(age);

        resetFormHandler();
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={usernameChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={passwordChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={age}
                        onChange={ageChangeHandler}
                    />
                </div>

                <button onClick ={submitHandler} type="button">Register</button>
                <button type="button" onClick={resetFormHandler}>Reset</button>
            </form>
        </>
    );
};