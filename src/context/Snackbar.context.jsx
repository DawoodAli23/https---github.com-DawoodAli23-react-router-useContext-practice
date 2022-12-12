import { message } from "antd";
import React, { useEffect, useState } from "react";

const SnackbarContext = React.createContext();

const SnackbarContextProvider = (props) => {
  const updateMessageContext = (msg, duration, type) => {
    message.success(msg);
  };
  return (
    <SnackbarContext.Provider value={{ updateMessageContext }}>
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
export function useSnackbarContext() {
  const context = React.useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error("useSnackbarContext can only be used inside AuthProvider");
  }
  return context;
}
