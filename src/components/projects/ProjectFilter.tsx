
import React from 'react';
import { projectCategories } from '../../data/projectsData';

interface ProjectFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilter = ({ currentFilter, onFilterChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center mb-12">
      {projectCategories.map((category) => (
        <button 
          key={category.id}
          className={`px-6 py-2 mx-2 mb-3 rounded-full transition-colors ${
            currentFilter === category.id 
              ? 'bg-alto-blue text-white' 
              : 'bg-white text-alto-dark-gray hover:bg-alto-light-gray'
          }`}
          onClick={() => onFilterChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
