import Header from "../components/layouts/Header";
import About from "../components/layouts/About";
import Products from "../components/layouts/Products";
import Footer from "../components/layouts/Footer";

// CSS
import '../assets/landing-page-css/landingPage.css'

const LandingPage = () => {
  return (
    <div className="container">
      <Header></Header>
      <About></About>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;