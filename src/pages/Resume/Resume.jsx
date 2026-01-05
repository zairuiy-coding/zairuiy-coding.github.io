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
            title="Software Engineer"
            company="PayPal | JunoDB Team"
            date="Jun 2025 — Present"
            description={[
              "‣ Improved client library reliability by expanding test coverage from 67% to 80%, reducing defects and increasing stability.",
              "‣ Designed and prototyped a Distributed Counter enhancement for high-throughput, write-heavy workloads, exploring architectures that could offer 10x throughput improvement and inform future scalability work.",
              "‣ Built automation for JunoDB's capacity evaluation and blast radius processes, modeling node utilization and service CPU/memory profiles to streamline P0 incident follow-up and improve infrastructure safety.",
              "‣ Supported infrastructure modernization efforts by assisting with JunoDB's Kubernetes-based migration and strengthening observability through optimized Datadog metric filters and alert thresholds.",
              "‣ Enhanced client experience by independently troubleshooting 10+ weekly integration issues, identifying recurring usage patterns, and publishing a 20+ entry troubleshooting guide adopted internally."
            ]}
          />
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
        </ol>
      </div>
    </section>
  );
};

export default Resume;
