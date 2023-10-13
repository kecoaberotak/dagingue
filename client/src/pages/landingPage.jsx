import Header from "../components/layouts/Header";
import About from "../components/layouts/About";
import Products from "../components/layouts/Products";
import Footer from "../components/layouts/Footer";
import { Helmet } from "react-helmet-async";

// CSS
import '../index.css'

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content="Menjual beef slice dengan beragam varian bumbu. | Berlokasi di Bogor, Jawa Barat | Sedia pesan-antar."
          data-rh="true"
        />
      </Helmet>
      <Header></Header>
      <About></About>
      <Products></Products>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;