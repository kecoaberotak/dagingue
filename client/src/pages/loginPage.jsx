import Button from "../components/elements/button";
import '../assets/loginPage.css'
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e){
    e.preventDefault();
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
    });
  }

  useEffect(() => {
    fetch('http://localhost:4000/getAdmin')
  }, []);

  return(
    <form className="form-login" onSubmit={handleLogin}>
      <p>Login</p>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginPage;