import FooterBanner from "../fragments/FooterBanner";
import FooterContact from "../fragments/FooterContact";

import '../../assets/landing-page-css/footer.css'

const Footer = () => {
  return(
    <footer className="footer" id="contact">
      <FooterBanner />
      <FooterContact />
    </footer>
  );
};

export default Footer;