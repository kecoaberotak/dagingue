import { createContext, useState } from "react";

export const ResetCount = createContext();

const ResetCountProvider = ({children}) => {
  const [resetCount, setResetCount] =  useState(0);

  return (
    <ResetCount.Provider value={{resetCount, setResetCount}}>
      {children}
    </ResetCount.Provider>
  );
};

export default ResetCountProvider;