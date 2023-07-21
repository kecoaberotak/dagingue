import Header from "../components/layouts/Header";
import About from "../components/layouts/About";
import Products from "../components/layouts/Products";
import Footer from "../components/layouts/Footer";

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