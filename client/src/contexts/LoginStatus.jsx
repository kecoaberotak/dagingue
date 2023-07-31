import { createContext, useState } from "react";

export const LoginStatus = createContext();

const LoginStatusProvider = ({children}) => {
  const [loginStatus, setLoginStatus] =  useState(false);

  return (
    <LoginStatus.Provider value={{loginStatus, setLoginStatus}}>
      {children}
    </LoginStatus.Provider>
  );
};

export default LoginStatusProvider;