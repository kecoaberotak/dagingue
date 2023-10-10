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
          content="Menjual beef slice dengan beragam varian bumbu. | Berlokasi di Bogor, Jawa Barat. Sedia pesan-antar."
          data-rh="true"
        />
        <meta 
          name="keywords"
          content="beef, daging, bogor, toko daging, daging bogor, beef slice, daging segar & beku, daging potong, beef slice bogor"
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