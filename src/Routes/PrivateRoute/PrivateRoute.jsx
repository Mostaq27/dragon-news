import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return (<div className="flex justify-center items-center h-screen">
            <span className="loading loading-infinity loading-lg"></span>
            </div>)
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
   
};
export default PrivateRoute;