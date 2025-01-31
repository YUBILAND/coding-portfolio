import React, { createContext, useState } from "react";

const GenshinContext = createContext(null);

export const GenshinContextProvider = ({ children }) => {
  const [loadingStep, setLoadingStep] = useState(0);

  return (
    <GenshinContext.Provider value={{ loadingStep, setLoadingStep }}>
      {children}
    </GenshinContext.Provider>
  );
};

export default GenshinContext;
