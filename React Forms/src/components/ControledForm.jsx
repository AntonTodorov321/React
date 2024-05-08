import { useState, useRef, useEffect } from "react";
import styles from "./ControlledForm.module.css"

const formInitialState = {
    username: "",
    password: "",
    age: "",
    gender: "F",
    swimming: false,
    shopping: false,
    running: false
};

export default function ControledForm({
    fromRef
}) {
    const usernameInputRef = useRef();
    const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }

    }, [formValues]);

    const changeHandler = (e) => {
        let value = e.target.value;

        if (e.target.type === "number") {
            value = Number(e.target.value);
        } else if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: value
        }));
    };

    const onCheckboxChenge = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.checked
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);

        resetFormHandler();
    };

    const ageValidator = () => {
        if (formValues.age < 0 || formValues.age > 120) {
            setErrors(state => ({
                ...state,
                age: "Age should be between 0 and 120",
            }))
        } else {
            if (errors.age) {
                setErrors(state => ({ ...state, age: "" }))
            };
        };
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form ref={fromRef} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        ref={usernameInputRef}
                        name="username"
                        type="text"
                        id="username"
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        name="age"
                        type="number"
                        id="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={errors.age && styles.inputError}
                    />
                    {errors.age &&
                        <p className={styles.errorMessage}>{errors.age}</p>}
                </div>

                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                        <option value="F">F</option>
                        <option value="M">M</option>
                    </select>
                </div>

                <dir>
                    <h3>Hobbies</h3>
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" onChange={onCheckboxChenge} checked={formValues.swimming} />

                    <label htmlFor="shopping">Shopping</label>
                    <input type="checkbox" name="shopping" id="shopping" onChange={onCheckboxChenge} checked={formValues.shopping} />

                    <label htmlFor="running">Running</label>
                    <input type="checkbox" name="running" id="running" onChange={onCheckboxChenge} checked={formValues.running} />

                </dir>

                <button type="submit" disabled={Object.values(errors).some(x => x)}>Register</button>
                <button type="button" onClick={resetFormHandler}>Reset</button>
            </form>
        </>
    );
};