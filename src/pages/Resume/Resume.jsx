import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import usePageTitle from '../../hooks/usePageTitle';

const Resume = () => {
  usePageTitle('Resume');

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
              "‣ Executed end-to-end tech refresh across 3+ Juno pools, managing full lifecycle including bare-metal provisioning, cross-site replication, namespace migration of 100GB+ of production data, and VIP-based traffic cutover via GVIP/GPOOL routing architecture, achieving zero downtime via LDR drill-based traffic isolation during cutover.",
              "‣ Managed a GKE-based Juno storage platform serving PayPal developer traffic, owning capacity operations across 10+ pools via vertical and horizontal scaling, including one intervention that reduced storage latency from 2s to <10ms; authored incident SOPs from scratch for disk saturation and capacity issues and conducted training sessions for 10+ L1/L2 engineers.",
              "‣ Maintained JunoDB's Java/Spring client library, expanding JUnit test coverage from 67% to 85%; designed and implemented a distributed counter using shard-based architecture to achieve linear write throughput scaling for high-concurrency workloads; published a 20+ entry troubleshooting guide from resolving 10+ weekly client integration issues.",
              "‣ Extended an internal Java/Spring-based blast-radius analysis platform with JunoDB-specific dependency extraction, implementing log-parsing logic to map pool-to-endpoint relationships across 10+ Juno pools and thousands of CI endpoints, enabling deployment impact scoping and faster incident triage."
            ]}
          />
          <TimelineItem
            title="Software Engineer Intern"
            company="Tesla | Factory Software Team"
            date="Sep 2024 — Dec 2024"
            description={[
              "‣ Migrated a legacy .NET ETL system to Golang and React, rebuilding backend as a task scheduler that extracts data from 200+ configured sources and publishes to Kafka topics, with a Golang web server bridging the pipeline and frontend.",
              "‣ Built a React/Next.js frontend with Task, Database, and User modules for ETL configuration and monitoring, enabling operators to configure task frequency, data source bindings, and view extraction history by timestamp and record count.",
              "‣ Achieved 80% unit test coverage across backend services; incorporated operator feedback via PM to iteratively simplify page structure and task configuration workflows, improving overall usability."
            ]}
          />
          <TimelineItem
            title="Software Engineer Intern"
            company="SciFeCap | Quant Trading"
            date="May 2024 — Aug 2024"
            description={[
              "‣ Implemented a WebSocket server for high-frequency live crypto-trading data ingestion, applying the Strategy Design Pattern to design an abstract buffer class with extensible aggregation strategies triggered by time, volume, and price-change thresholds, reducing raw data volume written to the database by 40% while preserving trading-relevant signals.",
              "‣ Designed and built FastAPI endpoints for real-time financial signal retrieval, achieving latency under 0.05 seconds via Python benchmarking; collaborated with Quant Research team to align APIs with trading strategies and feature requests.",
              "‣ Built a scheduled data ingestion pipeline pulling historical trading data from AWS S3 into PostgreSQL, automating dataset refresh to support backtesting and feature replication for new trading strategies."
            ]}
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
