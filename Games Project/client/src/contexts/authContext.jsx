import { createContext } from "react"

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext'

export default AuthContext;

export const AuthProvider = ({
    children,
    value
}) => {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};