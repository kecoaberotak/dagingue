import { createContext, useState } from "react";

export const IdPotong = createContext();

const IdPotongProvider = ({children}) => {
  const [idPotong, setIdPotong] =  useState('');

  return (
    <IdPotong.Provider value={{idPotong, setIdPotong}}>
      {children}
    </IdPotong.Provider>
  );
};

export default IdPotongProvider;