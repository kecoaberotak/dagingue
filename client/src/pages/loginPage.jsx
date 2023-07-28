import Button from "../components/elements/button";
import '../assets/loginPage.css'
import { useState} from "react";
import { useNavigate } from "react-router-dom";
// import { login } from "../services/auth-service";
import axios from 'axios';

// const LoginPage = () => {
//   const [loginFailed, setLoginFailed] = useState('');

//   function handleLogin(e){
//     e.preventDefault();

//     const data = {
//       username: e.target.username.value,
//       password: e.target.password.value,
//     };

//     login(data, (status, res) => {
//       if(status === true){
//         // console.log('sucess',status)
//         localStorage.setItem('username', res.data.admin.username);
//         // window.location.href = '/products'
//       } else {
//         console.log(res);
//       }
//     });
//   }

//   return(
//     <form className="form-login" onSubmit={handleLogin}>
//       <p>Login</p>
//       <input 
//         type="text" 
//         placeholder="Username"
//         name="username"
//       />
//       <input 
//         type="password" 
//         placeholder="Password"
//         name="password"
//       />
//       <Button>Login</Button>
//       {loginFailed && <p className="text-red-500 mt-3 text-center">{loginFailed}</p>}
//     </form>
//   );
// };

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = ev => {
    ev.preventDefault();

    const data = {
      username: username,
      password: password
    }

    axios.post('http://localhost:4000/login', data, {withCredentials: true}).then(res => {
      if(res.data.status){
        return navigate('/admin')
      }else console.log('gagal');
    }).catch(err => {
      throw err;
    });

  }

  return(
    <form className="form-login" onSubmit={handleLogin}>
      <p>Login</p>
      <input 
        type="text" 
        placeholder="Username"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button>Login</Button>
      {/* {loginFailed && <p className="text-red-500 mt-3 text-center">{loginFailed}</p>} */}
    </form>
  );
};

export default LoginPage;