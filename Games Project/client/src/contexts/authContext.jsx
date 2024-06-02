import { createContext } from "react"
import { useNavigate } from "react-router-dom"

import Path from "../paths"
import * as authService from '../services/authService'
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = usePersistedState('auth', {});
    const navigate = useNavigate();

    const loginSubmitHandler = async ({ email, password }) => {
        const result = await authService.login(email, password);
        localStorage.setItem('accessToken', result.accessToken);

        setAuth(result);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async ({ email, password }) => {
        const result = await authService.register(email, password);
        localStorage.setItem('accessToken', result.accessToken);

        setAuth(result);
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        navigate(Path.Home);
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;