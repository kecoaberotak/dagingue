import Button from "../components/elements/button";
import '../assets/loginPage.css'

const LoginPage = () => {
  return(
    <form action="" className="form-login">
      <p>Login</p>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <Button>Login</Button>
    </form>
  );
};

export default LoginPage;