import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import LoadingSpinner from '../../components/LoadingSpinner';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load projects');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
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

      {loading && <LoadingSpinner />}

      {error && (
        <p style={{ color: 'var(--orange-yellow-crayola)' }}>
          Error: {error}. Please try refreshing the page.
        </p>
      )}

      {!loading && !error && (
        <>
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
            {filteredProjects.length > 0 ? (
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
            ) : (
              <div className="empty-state">
                <ion-icon name="folder-open-outline"></ion-icon>
                <h3>No projects found</h3>
                <p>Try selecting a different category to see more projects.</p>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default Portfolio;
