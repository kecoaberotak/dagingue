const Header = () => {
  return(
    <header className="header" id="home">
      <section className="logo"><img src="./images/Logo.png" alt="Logo Dagingue" /></section>
        <ul className="navbar">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#about">Tentang Kami</a></li>
          <li><a href="#product">Produk</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        <ul className="socmed">
          <li><a href="https://www.instagram.com/dagingue.bogor/?hl=id" target="_blank" rel="noreferrer"><img src="./icons/instagram.svg" alt="instagram" /></a></li>
          <li><a href="https://wa.me/+6287881741174" target="_blank" rel="noreferrer"><img src="./icons/whatsapp.svg" alt="whatsapp" /></a></li>
          <li><a href="https://shopee.co.id/destyapriyani" target="_blank" rel="noreferrer"><img src="./icons/shopee.svg" alt="shopee" /></a></li>
        </ul>
    </header>
  );
};

export default Header;