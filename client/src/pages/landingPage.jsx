import Header from "../components/layouts/Header";
import About from "../components/layouts/About";
import Products from "../components/layouts/Products";
// import Footer from "../components/layouts/Footer";

// CSS
import '../index.css'

const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <Products></Products>
      {/* <Footer></Footer> */}
    </>
  );
};

export default LandingPage;