import React, { useState, useEffect, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import endpoints from '../util/endpoints';
import { providerTypes } from '../util/types';
import useAuth from '../hooks/useAuth';
import ModalContext from './modals';

const initialState = {
  projects: null,
  documents: null,
  credentials: null,
  fetching: null,
  error: null,
  createError: null,
};

const EntitiesContext = React.createContext(initialState);

const EntitiesProvider = ({ children }) => {
  const [projects, setProjects] = useState(initialState.projects);
  const [documents, setDocuments] = useState(initialState.documents);
  const [credentials, setCredentials] = useState(initialState.credentials);
  const [fetching, setFetching] = useState(initialState.fetching);
  const [error, setError] = useState(initialState.error);
  const [createError, setCreateError] = useState(initialState.createError);

  const { hideModal } = useContext(ModalContext);

  const { user } = useAuth();
  const userId = user ? user.sub : null;

  useEffect(() => {
    console.log('ENTITIES', {
      projects,
      documents,
      credentials,
      fetching,
      user,
    });
  });

  async function fetchProjects() {
    if (!userId) return null;
    setFetching(true);
    try {
      const res = await fetch(endpoints.projectReadAll, {
        method: 'POST',
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      handleSuccess(setProjects, data);
    } catch (error) {
      handleError(error);
    }
  }

  async function createProject(title, handle) {
    if (!userId) return null;
    setFetching(true);
    try {
      const postData = {
        title,
        handle,
        userId,
      };
      const res = await fetch(endpoints.projectCreate, {
        method: 'POST',
        body: JSON.stringify(postData),
      });
      const data = await res.json();
      if (data.data) {
        handleCreateSuccess();
      }
    } catch (_error) {
      handleCreateError();
    }
  }

  function handleSuccess(handler, data) {
    handler(data);
    setFetching(false);
    setError(null);
  }

  function handleError(error) {
    setError(error.message);
    setFetching(false);
  }

  function handleCreateSuccess() {
    hideModal();
    fetchProjects();
    setCreateError(null);
  }

  function handleCreateError() {
    setCreateError('Handle is taken, please try another');
  }

  return (
    <EntitiesContext.Provider
      value={{
        projects,
        documents,
        credentials,
        error,
        createError,
        fetching,
        fetchProjects,
        createProject,
      }}
    >
      {children}
    </EntitiesContext.Provider>
  );
};

EntitiesProvider.propTypes = providerTypes;

export default EntitiesContext;

export { EntitiesProvider };
