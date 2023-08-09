import { createContext, useState } from "react";

export const DataBumbu = createContext();

const DataBumbuProvider = ({children}) => {
  const [dataBumbu, setDataBumbu] =  useState();

  return (
    <DataBumbu.Provider value={{dataBumbu, setDataBumbu}}>
      {children}
    </DataBumbu.Provider>
  );
};

export default DataBumbuProvider;