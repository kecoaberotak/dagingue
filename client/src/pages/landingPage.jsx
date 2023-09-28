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
          content="Menjual beef slice dengan berbagai pilihan bumbu seperti barberque, teriyaki dan lada hitam. Berlokasi di Bogor, Jawa Barat"
          data-rh="true"
        />
        <link rel="canonical" href="https://dagingue.vercel.app/" />
      </Helmet>
      <Header></Header>
      <About></About>
      <Products></Products>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;