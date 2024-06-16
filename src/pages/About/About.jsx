import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web Development",
    description: "Crafting modern and responsive websites with a focus on user experience and performance."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Software Development",
    description: "Building efficient and scalable software solutions tailored to meet specific needs."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Database Management",
    description: "Implementing robust database solutions to ensure data integrity, security, and optimal performance."
  },
  {
    icon: "/images/icon-design.svg",  // Replace with a more appropriate icon if available
    title: "API Development",
    description: "Creating efficient and secure APIs for seamless integration and data exchange."
  }
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('testimonials.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          Hi, my name is Zairui (Katherine) Yang.👩 I'm a software engineer with a strong foundation in web and full-stack development. 💻  
          I am currently pursuing my MSc in Computer and Information Technology at the University of Pennsylvania, 🏫 
          where I have excelled in courses such as Programming for the Web, Data Structures and Software Design, and Database & Information Systems. 📚
        </p>
        <p>
          My experience includes implementing high-frequency live crypto-trading data systems, 📈 
          developing efficient APIs, and leading front-end development projects. 🌐 
          I am passionate about creating efficient, scalable, and user-friendly software solutions. 🚀 
          My goal is to contribute to innovative projects that make a real impact. 🌟
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

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
