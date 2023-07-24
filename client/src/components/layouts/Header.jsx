import Logo from "../elements/Logo";
import Socmed from "../fragments/Socmed";

import '../../assets/landing-page-css/header.css'

const Header = () => {
  return(
    <header className="header" id="home">
      <Logo classname='logo' image='./images/Logo.png' />
      <ul className="navbar">
        <li><a href="#home">Beranda</a></li>
        <li><a href="#about">Tentang Kami</a></li>
        <li><a href="#product">Produk</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
      <Socmed classname='socmed' />
    </header>
  );
};

export default Header;