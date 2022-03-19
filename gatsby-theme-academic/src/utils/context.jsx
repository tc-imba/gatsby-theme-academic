import React, { useState } from 'react';

const Context = React.createContext({});

export const ContextProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <Context.Provider value={{ state, setState }}>
      {props.children}
    </Context.Provider>
  );
};

export const ContextConsumer = Context.Consumer;

export default Context;
