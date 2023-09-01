import Header from "../components/layouts/Header";
import About from "../components/layouts/About";
import Products from "../components/layouts/Products";
import Footer from "../components/layouts/Footer";

// CSS
// import '../assets/landing-page-css/landingPage.css'
import '../index.css'

const LandingPage = () => {
  return (
    <div className="container">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
      <Header></Header>
      {/* <About></About> */}
      {/* <Products></Products> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default LandingPage;