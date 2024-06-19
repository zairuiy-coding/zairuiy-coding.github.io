import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      });
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      {/* Filter buttons */}
      <div className="filter-buttons">
        {['All', 'Full-Stack Development', 'Java Projects', 'Hackathon Winners'].map(category => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio items */}
      <div className="projects-display">
        <ul className="projects-list">
          {filteredProjects.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              category={post.category}
              date={post.date}
              image={post.image}
              description={post.description}
              link={post.link}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
