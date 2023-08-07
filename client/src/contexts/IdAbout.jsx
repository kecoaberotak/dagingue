import { createContext, useState } from "react";

export const IdAbout = createContext();

const IdAboutProvider = ({children}) => {
  const [idAbout, setIdAbout] =  useState('');

  return (
    <IdAbout.Provider value={{idAbout, setIdAbout}}>
      {children}
    </IdAbout.Provider>
  );
};

export default IdAboutProvider;