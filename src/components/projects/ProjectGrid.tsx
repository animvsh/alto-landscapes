
import React from 'react';
import ProjectCard from '../ProjectCard';
import { Project } from '../../data/projectsData';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { bathroomProjects } from '../../data/bathroomProjectsData';

interface ProjectGridProps {
  projects: Project[];
  showBathroomProjects?: boolean;
}

const ProjectGrid = ({ projects, showBathroomProjects = false }: ProjectGridProps) => {
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
      
      {showBathroomProjects && bathroomProjects.slice(0, 3).map((project, index) => (
        <Card key={`bathroom-${index}`} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <Link to={`/projects/bathroom/${project.id}`} className="block">
            <div className="h-64 overflow-hidden">
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-alto-blue mb-2">{project.title}</h3>
              <p className="text-alto-accent mb-2 text-sm">{project.location}</p>
              <p className="text-alto-dark-gray mb-4">{project.description.substring(0, 100)}...</p>
              <span className="text-alto-accent font-medium inline-flex items-center">
                View Project
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ProjectGrid;
