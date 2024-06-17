import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section className="resume-section">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University of Pennsylvania"
            degree="MSc, Computer and Information Technology"
            date="August 2023 — May 2025"
            description={
              <>
                - GPA: 3.86/4.0<br />
                - Coursework: Programming for the Web (JavaScript / React.js), Data Structures and Software Design (Java), Algorithms & Computation, Database & Information Systems (SQL/NoSQL), Computer Systems (C++)<br />
                - TA: CIT590 Programming Languages and Techniques (Python & Java)<br />
                - Awards: 2nd Place @ MCIT Hackathon 2024, Best Beginner Hack @ FemmeHack 2024
              </>
            }
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Software Engineer Intern"
            company="SciFeCap"
            date="May 2024 — Present"
            description={
              <>
                - Implemented a WebSocket server for high-frequency live crypto-trading data ingestion, integrating efficient buffering and data aggregation methods.<br />
                - Reduced database load by 40% and improved system performance by 15%.<br />
                - Developed robust Django APIs, significantly improving data retrieval efficiency by 45%, enabling traders to access critical market signals instantly, leading to a 25% increase in trading accuracy.
              </>
            }
          />
          <TimelineItem
            title="Software Engineer Intern (Frontend Team)"
            company="Geward"
            date="June 2023 — August 2023"
            description={
              <>
                - Led the development and iterative improvement of the Geward website using HTML/CSS/JavaScript, enhancing user interface efficiency and reducing bounce rates by 40% while increasing user engagement by 25%.<br />
                - Applied responsive design techniques, ensuring seamless functionality across multiple devices; improved user satisfaction by 25% and elevated site accessibility compliance by 15%.
              </>
            }
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Java" value={90} />
          <SkillItem title="Python" value={85} />
          <SkillItem title="React.js" value={80} />
          <SkillItem title="Django" value={70} />
          <SkillItem title="MySQL" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
