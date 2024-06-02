import { useContext } from "react";
import AuthContext from "../contexts/authContext";

export default function withAuth(Component) {
    const EnhancedComponents = (props) => {
        const auth = useContext(AuthContext);

        return <Component {...props} {...auth} />
    };

    return EnhancedComponents;
}