import React from 'react';

export const Context = React.createContext();

const Provider = ({store, children}) => (
    <Context.Provider value={store}>
      {children}
  </Context.Provider>
);

export default Provider;





