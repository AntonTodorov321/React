import { useContext } from "react"
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext"

export default function BaseAuthGuards(props) {
    const { isAuthnticated } = useContext(AuthContext);
    
    if (!isAuthnticated) {

        return <Navigate to='/login' />;
    }

    return (
        <>
            {this.props.children}
        </>
    )
}