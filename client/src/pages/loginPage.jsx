import Button from "../components/elements/button";
import '../assets/loginPage.css'
import { useState, useEffect } from "react";
import { login } from "../services/auth-service";
import { getAdmin } from "../services/auth-service";

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState('');

  function handleLogin(e){
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if(status){
        console.log(res.data.message);
        console.log(res.data.admin);
        // localStorage.setItem('username', res.data.username);
        // window.location.href = '/products'
      } else {
        // setLoginFailed(res.response.data);
        console.log(res.data.message);
      }
    });
  }

  // get data - coba doang
  useEffect(() => {
    getAdmin(data => console.log(data));
  }, []);

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
      {loginFailed && <p className="text-red-500 mt-3 text-center">{loginFailed}</p>}
    </form>
  );
};

export default LoginPage;