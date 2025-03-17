import { Navigate } from "react-router-dom";
import { isLogin } from "../utils";
function PrivateRoute({children}){
    return(
        <>
            {isLogin() ? children : <Navigate to="/" />}
        </>
    )
}
export default PrivateRoute