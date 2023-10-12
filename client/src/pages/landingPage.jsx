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

        {/* <meta property="og:type" content="article" />
        <meta property="og:title" content="Dagingue | Beef Slice Bogor" />
        <meta property="og:description" content="Menjual beef slice dengan berbagai varian bumbu." />
        <meta property="og:url" content="https://dagingue.vercel.app/" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/about%2Fabout-us.jpg?alt=media&token=d49211d1-08ae-4664-b9f2-139ba96affa3" />
        <meta property="og:image:width" content="282" />
        <meta property="og:image:height" content="282" />

        <meta name="twitter:title" content="Dagingue | Beef Slice Bogor" />
        <meta name="twitter:description" content="Menjual beef slice dengan berbagai varian bumbu." />
        <meta name="twitter:creator" content="@kecoaberotak" />
        <meta name="twitter:site" content="@kecoaberotak" />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/about%2Fabout-us.jpg?alt=media&token=d49211d1-08ae-4664-b9f2-139ba96affa3" />
        <meta name="twitter:card" content="summary" /> */}
      </Helmet>
      <Header></Header>
      <About></About>
      <Products></Products>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;