import { useEffect } from "react";

const Contacts = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("2 sec");
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        }
    }, []);

    return (
        <>
            <h2>Contact page</h2>

            <input type="text" />
            <textarea name="" id="" cols="30" rows="10" />
            <input type="submit" />
        </>
    );
};

export default Contacts; 