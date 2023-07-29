import Button from "../components/elements/button";
import '../assets/loginPage.css'
import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth-service";
import { getToken } from "../services/auth-service";
import { AdminInfo } from "../contexts/AdminInfo";

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState('');
  const {setAdminInfo} = useContext(AdminInfo);
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, async (status, res) => {
      if(status === true){
        getToken(res => setAdminInfo(res))
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