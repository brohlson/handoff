import React, { useState, useEffect } from 'react';
import { providerTypes } from '../util/types';

const initialState = {
  active: null,
};

const ModalContext = React.createContext(initialState);

const ModalProvider = ({ children }) => {
  const [active, setActive] = useState(initialState.active);

  useEffect(() => {
    console.log('MODAL', {
      active,
    });
  });

  function showModal(type) {
    setActive(type);
  }

  function hideModal() {
    setActive(null);
  }

  return (
    <ModalContext.Provider
      value={{
        active,
        showModal,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = providerTypes;

export default ModalContext;

export { ModalProvider };
