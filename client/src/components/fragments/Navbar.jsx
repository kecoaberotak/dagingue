import Button from "../elements/Button";
import { useContext } from "react";
import { logout } from "../../services/auth-service.js";
import { useNavigate } from "react-router-dom";
import { AdminInfo } from "../../contexts/AdminInfo";
import { LoginStatus } from "../../contexts/LoginStatus";

import "../../index.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { adminInfo, setAdminInfo } = useContext(AdminInfo);
  const { setLoginStatus } = useContext(LoginStatus);

  const handleLogout = () => {
    logout((res) => {
      if (res.status === 200) {
        setAdminInfo("");
        setLoginStatus(false);
        navigate("/login");
      } else if (res.status === 400) {
        alert(res.data.message);
      }
    });
  };

  return (
    <nav className="navbar" data-testid="navbar-admin">
      <p>{adminInfo.username}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </nav>
  );
};

export default Navbar;
