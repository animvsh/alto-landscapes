
import React from 'react';
import ProjectCard from '../ProjectCard';
import { Project } from '../../data/projectsData';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title} 
          description={project.description || ""} 
          imageSrc={project.image} 
          link={project.link} 
          location={project.location} 
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
