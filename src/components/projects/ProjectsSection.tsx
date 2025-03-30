
import React, { useState, useEffect } from 'react';
import ProjectFilter from './ProjectFilter';
import ProjectGrid from './ProjectGrid';
import { projects, projectCategories } from '../../data/projectsData';

const ProjectsSection = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [locationFilter, setLocationFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Extract unique locations from projects
  const locations = ['all', ...Array.from(new Set(projects.map(project => {
    const location = project.location.split(',')[0].trim();
    return location;
  })))];

  useEffect(() => {
    let result = projects;
    
    // Apply category filter
    if (currentFilter !== 'all') {
      result = result.filter(project => project.category === currentFilter);
    }
    
    // Apply location filter
    if (locationFilter !== 'all') {
      result = result.filter(project => 
        project.location.split(',')[0].trim() === locationFilter
      );
    }
    
    setFilteredProjects(result);
  }, [currentFilter, locationFilter]);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredProjects.length));
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Browse our portfolio of custom ADUs and home remodeling projects
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium text-alto-blue mb-2">Filter by Type:</h3>
          <ProjectFilter currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
        </div>
        
        <div className="mb-12">
          <h3 className="text-lg font-medium text-alto-blue mb-2">Filter by Location:</h3>
          <div className="flex flex-wrap justify-center">
            {locations.map((location) => (
              <button 
                key={location}
                className={`px-6 py-2 mx-2 mb-3 rounded-full transition-colors ${
                  locationFilter === location 
                    ? 'bg-alto-blue text-white' 
                    : 'bg-white text-alto-dark-gray hover:bg-alto-light-gray'
                }`}
                onClick={() => setLocationFilter(location)}
              >
                {location === 'all' ? 'All Locations' : location}
              </button>
            ))}
          </div>
        </div>

        <ProjectGrid projects={filteredProjects.slice(0, visibleCount)} />
        
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <button 
              className="bg-alto-blue text-white px-6 py-3 rounded hover:bg-alto-light-blue transition-colors"
              onClick={handleLoadMore}
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
