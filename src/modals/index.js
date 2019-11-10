import React, { useContext } from 'react';
import ModalContext from '../store/modals';
import CreateProject from './CreateProject';
import { MODALS } from '../store/types';
import useAuth from '../hooks/useAuth';

export default () => {
  const { active } = useContext(ModalContext);
  const { user } = useAuth();

  if (!user) return null;

  function displayModal() {
    if (active === MODALS.CREATE_PROJECT) return <CreateProject />;
    return null;
  }

  return displayModal();
};
