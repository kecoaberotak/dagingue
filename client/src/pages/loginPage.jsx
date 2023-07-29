import Button from "../components/elements/button";
import '../assets/loginPage.css'
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth-service";
// import axios from 'axios';

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState('');
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if(status === true){
        return navigate('/admin');
      } else {
        setLoginFailed(res.data.message);
      }
    });
  }

  return(
    <form className="form-login" onSubmit={handleLogin}>
      <p>Login</p>
      <input 
        type="text" 
        placeholder="Username"
        name="username"
      />
      <input 
        type="password" 
        placeholder="Password"
        name="password"
      />
      <Button>Login</Button>
      {loginFailed && <span className='login-failed'>{loginFailed.toUpperCase()}!</span>}
    </form>
  );
};

export default LoginPage;