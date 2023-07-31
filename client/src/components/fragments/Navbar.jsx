import '../../assets/components/navbar.css'
import Button from "../elements/button";
import { useContext} from "react";
import { logout } from '../../services/auth-service.js';
import { useNavigate } from 'react-router-dom';
import { AdminInfo } from '../../contexts/AdminInfo';
import { LoginStatus } from '../../contexts/LoginStatus';

const Navbar = () => {
  const navigate = useNavigate();
  const {adminInfo, setAdminInfo} = useContext(AdminInfo);
  const {setLoginStatus} = useContext(LoginStatus);

  const handleLogout = () => {
    logout(res => {
      if(res.data.status) {
        setAdminInfo('');
        setLoginStatus(false);
        navigate('/login');
      }
    });
  };

  return(
    <nav className="navbar">
      <p>{adminInfo.username}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </nav>
  );
};

export default Navbar;