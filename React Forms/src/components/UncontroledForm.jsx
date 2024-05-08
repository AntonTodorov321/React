export default function UncontroledForm() {
    const submitHandler = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        console.log(form.get('username'));
        console.log(form.get('password'));
    };

    return (
        <>
            <h1>Uncontrolled Form</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" />
                </div>

                <button>Register</button>
                <button type="button">Reset</button>
            </form>
        </>
    );
};