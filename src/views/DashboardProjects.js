import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import _map from 'lodash/map';
import EntitiesContext from '../store/entities';
import LoadingScreen from '../components/LoadingScreen';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import ModalContext from '../store/modals';
import { MODALS } from '../store/types';
import ProjectListItem from '../components/ProjectListItem';

const Wrapper = styled.div`
  position: relative;
`;

export default function DashboardProjects() {
  const { projects, fetchProjects, fetching, error } = useContext(
    EntitiesContext
  );
  const { showModal } = useContext(ModalContext);

  useEffect(() => {
    fetchProjects();
  }, []);

  if (fetching) return <LoadingScreen />;

  if (!fetching && projects && !projects.length)
    return (
      <EmptyState
        message="You don't have any projects!"
        cta="Create project"
        action={() => showModal(MODALS.CREATE_PROJECT)}
      />
    );

  if (!fetching && error) {
    return <ErrorState message={error} />;
  }

  function renderProjects() {
    return _map(projects, (p, i) => <ProjectListItem key={i} data={p.data} />);
  }

  return <Wrapper>{renderProjects()}</Wrapper>;
}
