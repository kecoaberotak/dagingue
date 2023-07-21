import Header from "../components/layouts/Header";
import About from "../components/layouts/About";
import Products from "../components/layouts/Products";

const LandingPage = () => {
  return (
    <div className="container">
      <Header></Header>
      <About></About>
      <Products></Products>
    </div>
  );
};

export default LandingPage;