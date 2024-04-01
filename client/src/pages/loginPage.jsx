import Button from "../components/elements/Button";
import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth-service";
import { getToken } from "../services/auth-service";
import { AdminInfo } from "../contexts/AdminInfo";
import { LoginStatus } from "../contexts/LoginStatus";
import { Helmet } from "react-helmet-async";

import "../index.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const usernameFocus = useRef();

  const [loginFailed, setLoginFailed] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { adminInfo, setAdminInfo } = useContext(AdminInfo);
  const { loginStatus, setLoginStatus } = useContext(LoginStatus);

  function handleLogin(e) {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    if (username === "" || password === "") {
      setLoginFailed("Please insert your data");
    } else {
      login(data, (res) => {
        if (res.status === 200) {
          getToken((res) => {
            setLoginFailed(null);
            setAdminInfo(res);
            setLoginStatus(true);
          });
        } else if (res.status === 400) {
          setLoginFailed(res.data.message);
        }
      });
    }
  }

  useEffect(() => {
    if (adminInfo.username && loginStatus) {
      navigate("/admin");
    }
  }, [adminInfo, loginStatus, navigate]);

  useEffect(() => {
    usernameFocus.current.focus();
  }, []);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Login | Dagingue</title>
      </Helmet>

      <form className="form-login" onSubmit={handleLogin}>
        <p>Login</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={usernameFocus}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
        {loginFailed && (
          <span className="login-failed">{loginFailed.toUpperCase()}!</span>
        )}
      </form>
    </>
  );
};

export default LoginPage;
