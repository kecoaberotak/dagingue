import { createContext, useState } from "react";

export const TitleSelected = createContext();

const TitleSelectedProvider = ({children}) => {
  const [titleSelected, setTitleSelected] = useState('');

  return(
    <TitleSelected.Provider value={{titleSelected, setTitleSelected}}>
      {children}
    </TitleSelected.Provider>
  );
};

export default TitleSelectedProvider;