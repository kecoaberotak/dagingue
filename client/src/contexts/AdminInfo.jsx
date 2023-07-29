import { createContext, useState } from "react";

export const AdminInfo = createContext();

const AdminInfoProvider = ({children}) => {
  const [adminInfo, setAdminInfo] =  useState({});

  return (
    <AdminInfo.Provider value={{adminInfo, setAdminInfo}}>
      {children}
    </AdminInfo.Provider>
  );
};

export default AdminInfoProvider;