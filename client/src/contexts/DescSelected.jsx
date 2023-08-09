import { createContext, useState } from "react";

export const DescSelected = createContext();

const DescSelectedProvider = ({children}) => {
  const [descSelected, setDescSelected] = useState('');

  return(
    <DescSelected.Provider value={{descSelected, setDescSelected}}>
      {children}
    </DescSelected.Provider>
  );
};

export default DescSelectedProvider;