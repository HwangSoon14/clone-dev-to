import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ children}) => {
    const user = useSelector(state => state.auth.current_user);
        

    if (Object.keys(user).length > 0) {
      return children
    }
      
    return <Navigate to="/sign-in" />
  }