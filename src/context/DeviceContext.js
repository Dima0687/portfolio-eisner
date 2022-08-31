import { createContext, useState } from "react";

export const DeviceContext = createContext();

export const DeviceContextProvider = ({ children }) => {
  const [device, setDevice] = useState('mobile');

  return (
    <DeviceContext.Provider value={{ device, setDevice }}>
      { children }
    </DeviceContext.Provider>
  );
}