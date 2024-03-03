import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [selectedTab, setSelectedTab] = useState(0);
  let data = {
    selectedTab,
    setSelectedTab
  };
  return (
    <UserContext.Provider value={data}>
      {props?.children}
    </UserContext.Provider>
  );
}
