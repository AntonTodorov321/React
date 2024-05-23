import { useState } from "react";

export default function useForm(initilaValues) {
    const [values, setValues] = useState(submitHandler, initilaValues);

    const onChange = () => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDEfault();

        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit
    };
};