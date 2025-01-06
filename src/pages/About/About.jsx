import { useEffect, useState } from "react";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Backend Development",
    description: "Building scalable, high-performance backend systems with Golang, Kafka, and FastAPI."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Full-Stack Development",
    description: "Developing robust full-stack applications with React, Next.js, and Node.js."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Data Engineering",
    description: "Designing efficient data pipelines and processing systems for real-time analytics."
  },
  {
    icon: "/images/icon-design.svg",  // Replace with a more appropriate icon if available
    title: "API Development",
    description: "Creating secure, high-performance APIs and microservices for seamless integration."
  }
];

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        {/* Introduction */}
        <p>
            👋 Hi, I'm <strong>Zairui (Katherine) Yang</strong>, a passionate software engineer 
            specializing in backend systems, data engineering, and full-stack development.  
            I’m currently pursuing my <strong>MSc in Computer and Information Technology</strong> at the 
            University of Pennsylvania, graduating in <strong>May 2025</strong>.
        </p>
        
        <br />

        {/* Experience Section */}
        <p>🔹 <strong>Work Experience</strong></p>
        <ul>
            <li>⚡ <strong>Tesla | Software Engineer Intern</strong> – Migrated a legacy .NET ETL system to Golang & React, enhancing scalability for 200+ factory processes.</li>
            <li>📈 <strong>SciFeCap | Software Engineer Intern</strong> – Built a WebSocket-based real-time data pipeline, optimizing high-frequency trading data and reducing database load.</li>
            <li>🤖 <strong>MCIT Slack Bot | Software Engineer</strong> – Developed an AI-powered alumni search tool using OpenAI API, Redis, and Celery, scaling to 300+ users.</li>
        </ul>

        <br />

        {/* Motivation Section */}
        <p>
            💡 I thrive on building scalable, high-performance systems and tackling complex engineering challenges.  
            I’m always eager to explore new technologies and push the boundaries of what’s possible.
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
                    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++" /> 
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /> 
                    <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white" alt="SQL" />
                </div>
            </div>

            {/* Backend & Data Engineering */}
            <div className="skills-category">
                <h4>Backend & Data Engineering</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /> 
                    <img src="https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" alt="Kafka" />
                    <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
                    <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
                    <img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=celery&logoColor=white" alt="Celery" />
                </div>
            </div>

            {/* Frontend */}
            <div className="skills-category">
                <h4>Frontend</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /> 
                    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
                    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" /> 
                </div>
            </div>

            {/* Databases */}
            <div className="skills-category">
                <h4>Databases</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" /> 
                    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /> 
                    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" /> 
                    <img src="https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="SQL Server" />
                </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="skills-category">
                <h4>Cloud & DevOps</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS" /> 
                    <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
                    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /> 
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
