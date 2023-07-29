import Button from "../components/elements/button";
import '../assets/loginPage.css'
import { useContext, useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth-service";
import { getToken } from "../services/auth-service";
import { AdminInfo } from "../contexts/AdminInfo";

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState('');
  const {adminInfo, setAdminInfo} = useContext(AdminInfo);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const usernameFocus = useRef();

  function handleLogin(e){
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, async (status, res) => {
      if(status === true){
        getToken(res => {
          setAdminInfo(res);
          setStatus(true);
        })
      } else {
        setLoginFailed(res.data.message);
      }
    });
  }

  useEffect(() => {
    if(adminInfo.username && status) {
      setStatus(false);
      navigate('/admin');
    }
  }, [adminInfo, status, navigate])

  useEffect(() => {
    usernameFocus.current.focus();
  }, []);

  return(
    <form className="form-login" onSubmit={handleLogin}>
      <p>Login</p>
      <input 
        type="text" 
        placeholder="Username"
        name="username"
        ref={usernameFocus}
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