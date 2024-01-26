import Logo from "../elements/Logo";
import Socmed from "../fragments/Socmed";

const Header = () => {
  return(
    <header className="header" id="home">
      <Logo classname='logo' />
      <ul className="navbar-header">
        <li><a href="#about">Tentang Kami</a></li>
        <li><a href="#product">Produk</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
      <Socmed classname='socmed' />
    </header>
  );
};

export default Header;