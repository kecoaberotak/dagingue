import { createContext, useState } from "react";

export const DisplayStatus = createContext();

const DisplayStatusProvider = ({children}) => {
  const [displayStatus, setDisplayStatus] =  useState('show');

  return (
    <DisplayStatus.Provider value={{displayStatus, setDisplayStatus}}>
      {children}
    </DisplayStatus.Provider>
  );
};

export default DisplayStatusProvider;