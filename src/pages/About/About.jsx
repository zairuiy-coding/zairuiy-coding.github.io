import { useEffect, useState } from "react";
import Service from "./Service";
import usePageTitle from "../../hooks/usePageTitle";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Backend Development",
    description: "Building scalable distributed systems with Golang, Java/Spring, Kubernetes, and modern databases."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Infrastructure & Platform",
    description: "Managing production storage platforms on GKE, owning capacity operations, and authoring incident SOPs for large-scale distributed systems."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Full-Stack & Tooling",
    description: "Developing full-stack applications with React, Next.js, and Node.js, with a focus on internal tooling and developer-facing platforms."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "API Development",
    description: "Creating high-performance APIs and real-time data pipelines using FastAPI, WebSockets, and Kafka for latency-sensitive workloads."
  }
];

const About = () => {
  usePageTitle('About Me');

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        {/* Introduction */}
        <p>
            👋 Hi, I'm <strong>Zairui (Katherine) Yang</strong>, a passionate software engineer
            specializing in backend systems, distributed systems, and full-stack development.
            I hold an <strong>MSc in Computer and Information Technology</strong> from{" "}
            <strong>University of Pennsylvania</strong> (graduated May 2025).
        </p>

        <br />

        {/* Experience Section */}
        <p>🔹 <strong>Work Experience</strong></p>
        <ul>
            <li>💳 <strong>PayPal | Software Engineer</strong> – Working on JunoDB, PayPal's in-house distributed caching system (350B+ daily requests). Executed tech refresh across 3+ pools with 100GB+ data migration achieving zero downtime; managed GKE-based storage platform reducing latency from 2s to &lt;10ms; designed a distributed counter for linear write throughput scaling.</li>
            <li>⚡ <strong>Tesla | Software Engineer Intern</strong> – Migrated a legacy .NET ETL system to Golang & React, rebuilding the backend as a task scheduler extracting data from 200+ configured sources and publishing to Kafka topics.</li>
            <li>📈 <strong>SciFeCap | Software Engineer Intern</strong> – Built a WebSocket-based real-time data pipeline using the Strategy Design Pattern, reducing raw database load by 40% while preserving trading-relevant signals.</li>
        </ul>

        <br />

        {/* Motivation Section */}
        <p>
            💡 I’m particularly drawn to the reliability and performance challenges in distributed systems and platform engineering, the kind of problems where correctness, latency, and scale all have to be balanced at once. At PayPal I’ve gotten to work on exactly that, and it’s the space I want to keep going deeper in.
        </p>

    </section>

      {/* Services Section */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* Skills Section */}
        <section className="skills-section">
            <h3 className="h3 skills-title">Skills</h3>

            {/* Languages */}
            <div className="skills-category">
                <h4>Languages</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/Go-00ADD8?logo=Go&logoColor=white&style=for-the-badge" alt="Go" />
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                    <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
                    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                    <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white" alt="SQL" />
                </div>
            </div>

            {/* Infrastructure & DevOps */}
            <div className="skills-category">
                <h4>Infrastructure & DevOps</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
                    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                    <img src="https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white" alt="Elasticsearch" />
                    <img src="https://img.shields.io/badge/Apache%20Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" alt="Kafka" />
                    <img src="https://img.shields.io/badge/CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="CI/CD" />
                    <img src="https://img.shields.io/badge/Datadog-632CA6?style=for-the-badge&logo=datadog&logoColor=white" alt="Datadog" />
                </div>
            </div>

            {/* Databases */}
            <div className="skills-category">
                <h4>Databases</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                    <img src="https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="MSSQL" />
                    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                    <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
                </div>
            </div>

            {/* Tools & Frameworks */}
            <div className="skills-category">
                <h4>Tools & Frameworks</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                    <img src="https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white" alt="JUnit" />
                    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React.js" />
                    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
                    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
                    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
                    <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
                    <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS" />
                    <img src="https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" alt="GCP" />
                    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
                    <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress" />
                </div>
            </div>
        </section>


      <section className="achievements">
        <h3 className="h3 achievements-title">Achievements</h3>
        <ul>
          <li>🥇 2nd Place @ MCIT Hackathon 2024</li>
          <li>🏆 Best Beginner Hack @ FemmeHack 2024</li>
        </ul>
      </section>
    </article>
  );
};

export default About;
