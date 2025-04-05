
import React from 'react';
import { useParams } from 'react-router-dom';
import BathroomProjectDetail from '../../components/projects/BathroomProjectDetail';
import PageTransition from '../../components/PageTransition';

const BathroomProject = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  return (
    <PageTransition>
      <BathroomProjectDetail />
    </PageTransition>
  );
};

export default BathroomProject;
