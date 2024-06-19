import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    emailjs.init('xXRIuRbwkfAlURR6R'); // Replace with your EmailJS public key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n6jneod', 'template_gskvzyr', e.target)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send the message, please try again later.');
      });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195601.4862868092!2d-75.4294951007376!3d40.002344183499645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA%2C%20USA!5e0!3m2!1sen!2sbd!4v1718834928858!5m2!1sen!2sbd"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form id="contact_form" onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
            <input type="email" name="reply_to" className="form-input" placeholder="Email address" required data-form-input />
          </div>
          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
