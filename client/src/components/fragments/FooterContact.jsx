import Socmed from "./Socmed";
import Logo from "../elements/Logo";

const FooterContact = () => {
  return(
    <section className="footer-contact">
      <div className="contact-info">
        <section className="contact-info-main">
          <p><a href="mailto:dennisfernandes0212@gmail.com">dagingue@gmail.com</a></p>
          <p>085716059444</p>
          <p>Perumahan Bumi Menteng Asri<br />
            Blok BN 20. RT 02  RW 03<br />
            Bogor, Jawa Barat</p>
            <p><a href="https://goo.gl/maps/ypBTX8cgGmkmHZGUA" target="_blank" rel="noreferrer">Lihat pada peta</a></p>
        </section>
        <Socmed classname="contact-info-socmed" />
      </div>
      <Logo classname='contact-logo' />
    </section>
  );
};

export default FooterContact;