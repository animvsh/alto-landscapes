
import React, { useState } from 'react';
import { projects } from '../../data/projectsData';
import ProjectFilter from './ProjectFilter';
import ProjectGrid from './ProjectGrid';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Discover the quality and craftsmanship of our custom ADUs
          </p>
        </div>

        <ProjectFilter currentFilter={filter} onFilterChange={setFilter} />
        <ProjectGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
