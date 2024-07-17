import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {token} = useContext(AuthContext);

    return token ? children : <Navigate to="/login"></Navigate>
};

export default PrivateRoute;