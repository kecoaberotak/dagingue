import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AdminInfo } from "../contexts/AdminInfo";

const PrivateRoute = ({children}) => {
  const {adminInfo} = useContext(AdminInfo);

  if(!adminInfo.username){
    return <Navigate to='/login' replace/>
  }else return children;
}

export default PrivateRoute;