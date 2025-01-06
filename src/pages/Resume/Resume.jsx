import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';

const Resume = () => {
  return (
    <section className="resume-section">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education Section */}
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
            description={[
              "‣ GPA: 3.86/4.0",
              "‣ Coursework: Programming for the Web (JavaScript/React.js), Data Structures and Software Design (Java), Algorithms & Computation, Database & Information Systems (SQL/NoSQL), Computer Systems (C++)",
              "‣ Teaching Assistant: CIT596 Algorithms and Computation, CIT590 Programming Languages and Techniques (Python & Java)",
              "‣ Awards: 2nd Place @ MCIT Hackathon 2024, Best Beginner Hack @ FemmeHack 2024"
            ]}
          />
        </ol>
      </div>

      {/* Experience Section */}
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
            company="Tesla | Factory Software Team"
            date="Sep 2024 — Dec 2024"
            description={[
              "‣ Migrated a legacy .NET ETL system to Golang & React, reducing downtime by 30% and improving scalability for 200+ factory processes.",
              "‣ Redesigned database schemas, reducing redundancy by 40% and optimizing query performance.",
              "‣ Built a React frontend with Next.js, streamlining task scheduling and improving workflow efficiency by 30%."
            ]}
          />
          <TimelineItem
            title="Software Engineer Intern"
            company="SciFeCap | Quant Trading"
            date="May 2024 — Aug 2024"
            description={[
              "‣ Implemented a WebSocket-based high-frequency trading data pipeline, reducing database load by 40%.",
              "‣ Developed a FastAPI service for financial signals, reducing latency to under 0.05 seconds.",
              "‣ Automated historical trading data ingestion from AWS S3 to PostgreSQL for backtesting and strategy replication."
            ]}
          />
          <TimelineItem
            title="Software Engineer Intern"
            company="Lonely Octopus | LO x MCIT"
            date="Jul 2024 — Aug 2024"
            description={[
              "‣ Developed an AI-powered Slack Bot for alumni search, integrating OpenAI API, Redis, and Celery.",
              "‣ Designed natural language processing prompts, achieving 90% accuracy in query responses.",
              "‣ Implemented scalable session management, reducing response time by 30% for a workspace of 300+ users."
            ]}
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
