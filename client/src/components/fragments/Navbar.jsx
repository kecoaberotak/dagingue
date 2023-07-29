import '../../assets/components/navbar.css'
import Button from "../elements/button";
import { useEffect, useState} from "react";
import {getToken} from '../../services/auth-service.js'

const Navbar = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    getToken((res) => setUsername(res.data.username));
  }, []);

  return(
    <nav className="navbar">
      <p>{username}</p>
      <Button>Logout</Button>
    </nav>
  );
};

export default Navbar;