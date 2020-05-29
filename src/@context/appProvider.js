import React, { useState } from "react";

import { AppContext } from "@context";

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    list: {},
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};
