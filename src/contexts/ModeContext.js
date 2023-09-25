import React from "react";

export const ModeContext = React.createContext({
  mode: "normal",
  setMode: () => {},
});
