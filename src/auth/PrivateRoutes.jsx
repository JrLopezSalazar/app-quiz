import { Navigate, Outlet } from "react-router-dom";
import { useUserInfo } from "../../store/userInfo";

const PrivateRoutes = () => {

    const user = useUserInfo((state) => state.user);

  if (user.token) {
    return (
      
        <Outlet />
     
    );
  } else {
    return <Navigate to={"/auth/login/"} />;
  }
}

export default PrivateRoutes