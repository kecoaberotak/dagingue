import '../../assets/components/navbar.css'

import Button from "../elements/button";

const Navbar = () => {

  return(
    <nav className="navbar">
      <p>Username</p>
      <Button>Logout</Button>
    </nav>
  );
};

export default Navbar;