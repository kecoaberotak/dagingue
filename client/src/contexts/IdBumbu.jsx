import { createContext, useState } from "react";

export const IdBumbu = createContext();

const IdBumbuProvider = ({children}) => {
  const [idBumbu, setIdBumbu] =  useState('');

  return (
    <IdBumbu.Provider value={{idBumbu, setIdBumbu}}>
      {children}
    </IdBumbu.Provider>
  );
};

export default IdBumbuProvider;